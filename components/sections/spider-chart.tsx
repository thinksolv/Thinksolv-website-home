"use client";

import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";

const SpiderWebBuilder = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let app: PIXI.Application;
    let animationFrame: number;

    const setup = async () => {
      if (!canvasRef.current) return;

      const width = 600;
      const height = 500;

      app = new PIXI.Application({
        width,
        height,
        backgroundAlpha: 0,
        antialias: true,
      });

      canvasRef.current.appendChild(app.view as unknown as Node);

      const center = { x: width / 2, y: height / 2 };
      const numSpokes = 12;
      const numRings = 6;
      const maxRadius = 160;
      const spiralOffset = 20;
      const frameDelay = 6; // slower animation

      const spokeAngles = Array.from({ length: numSpokes }, (_, i) =>
        (i * 2 * Math.PI) / numSpokes
      );

      // Ring points: [ring][pointIndex]
      const rings: { x: number; y: number }[][] = [];
      for (let r = 1; r <= numRings; r++) {
        const radius = (r / numRings) * maxRadius;
        const ringPoints = spokeAngles.map((angle) => ({
          x: center.x + radius * Math.cos(angle),
          y: center.y + radius * Math.sin(angle),
        }));
        rings.push(ringPoints);
      }

      const webGraphics = new PIXI.Graphics();
      app.stage.addChild(webGraphics);

      const threadGraphics = new PIXI.Graphics();
      app.stage.addChild(threadGraphics);

      const spiderTexture = await PIXI.Assets.load("/spider.png");
      const spider = new PIXI.Sprite(spiderTexture);
      spider.anchor.set(0.5);
      spider.width = 32;
      spider.height = 32;
      spider.position.set(center.x, -40); // start above
      app.stage.addChild(spider);

      let step = 0;
      let frameCount = 0;
      const totalRadial = numSpokes;
      const totalSpiral = numRings;
      const totalSteps = totalRadial + totalSpiral;

      const spiderDropFrames = 40;

      const animate = () => {
        frameCount++;

        webGraphics.clear();
        webGraphics.lineStyle(1, 0xcccccc, 0.8);

        threadGraphics.clear();
        threadGraphics.lineStyle(1, 0xffffff, 0.4);
        threadGraphics.moveTo(center.x, 0);
        threadGraphics.lineTo(spider.x, spider.y - 10);

        if (frameCount < spiderDropFrames) {
          spider.y = -40 + (frameCount / spiderDropFrames) * (center.y - 100);
          animationFrame = requestAnimationFrame(animate);
          return;
        }

        if ((frameCount - spiderDropFrames) % frameDelay !== 0) {
          animationFrame = requestAnimationFrame(animate);
          return;
        }

        // Draw radial lines (longer than spiral)
        for (let i = 0; i < Math.min(step + 1, totalRadial); i++) {
          const angle = spokeAngles[i];
          const x = center.x + (maxRadius + spiralOffset) * Math.cos(angle);
          const y = center.y + (maxRadius + spiralOffset) * Math.sin(angle);
          webGraphics.moveTo(center.x, center.y);
          webGraphics.lineTo(x, y);
        }

        // Draw spiral curves (concave arcs)
        if (step >= totalRadial) {
          const spiralStep = step - totalRadial;
          for (let r = 0; r <= spiralStep && r < rings.length; r++) {
            const points = rings[r];
            if (!points || points.length === 0) continue;

            for (let i = 0; i < points.length; i++) {
              const p1 = points[i];
              const p2 = points[(i + 1) % points.length];
              const cx = (p1.x + p2.x) / 2;
              const cy = (p1.y + p2.y) / 2;

              const offsetX = (center.x - cx) * 0.15; // concave inward
              const offsetY = (center.y - cy) * 0.15;

              const controlX = cx + offsetX;
              const controlY = cy + offsetY;

              webGraphics.moveTo(p1.x, p1.y);
              webGraphics.quadraticCurveTo(controlX, controlY, p2.x, p2.y);
            }
          }
        }

        // Move spider to active point
        let target;
        if (step < totalRadial) {
          const angle = spokeAngles[step];
          target = {
            x: center.x + maxRadius * Math.cos(angle),
            y: center.y + maxRadius * Math.sin(angle),
          };
        } else if (step < totalSteps) {
          const ringIndex = step - totalRadial;
          target = rings[ringIndex]?.[0];
        }

        if (target) {
          spider.x = target.x;
          spider.y = target.y;
        }

        step++;
        if (step <= totalSteps) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animate();
      setLoading(false);
    };

    setup();

    return () => {
      cancelAnimationFrame(animationFrame);
      app?.destroy(true, true);
    };
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-[500px] relative bg-white">
      {loading && (
        <div className="absolute inset-0 items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading animation...</div>
        </div>
      )}
    </div>
  );
};

export default SpiderWebBuilder;
