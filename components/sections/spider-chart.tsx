'use client';

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function SpiderWeb() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new PIXI.Application({
      resizeTo: window,
      backgroundAlpha: 0,
      antialias: true,
    });

    canvasRef.current.appendChild(app.view as HTMLCanvasElement);

    const spacing = 80;
    const cols = Math.ceil(window.innerWidth / spacing) + 2;
    const rows = Math.ceil(window.innerHeight / spacing) + 2;
    const points: PIXI.Point[][] = [];

    for (let i = 0; i < cols; i++) {
      points[i] = [];
      for (let j = 0; j < rows; j++) {
        points[i][j] = new PIXI.Point(i * spacing, j * spacing);
      }
    }

    const grid = new PIXI.Graphics();
    grid.lineStyle(1, 0xeeeeee, 0.2);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (i < cols - 1)
          grid.moveTo(points[i][j].x, points[i][j].y).lineTo(points[i + 1][j].x, points[i + 1][j].y);
        if (j < rows - 1)
          grid.moveTo(points[i][j].x, points[i][j].y).lineTo(points[i][j + 1].x, points[i][j + 1].y);
      }
    }
    app.stage.addChild(grid);

    const spider = PIXI.Sprite.from('/spider.png');
    spider.anchor.set(0.5);
    spider.width = 30;
    spider.height = 30;
    app.stage.addChild(spider);

    const web = new PIXI.Graphics();
    web.lineStyle(2, 0x333333, 0.6);
    app.stage.addChild(web);

    let current: PIXI.Point = points[0][0];

    // Faster spider movement
    const moveSpider = (from: PIXI.Point, to: PIXI.Point, onComplete: () => void) => {
      let progress = 0;
      const duration = 10 + Math.random() * 10; // very fast: ~10–20 ticks

      app.ticker.add(function animate(delta) {
        progress += delta;
        const t = Math.min(progress / duration, 1);
        spider.x = from.x + (to.x - from.x) * t;
        spider.y = from.y + (to.y - from.y) * t;

        if (t === 1) {
          web.moveTo(from.x, from.y);
          web.lineTo(to.x, to.y);
          current = to;
          app.ticker.remove(animate);
          setTimeout(onComplete, 5 + Math.random() * 10); // very short delay
        }
      });
    };

    const getRandomNeighbor = (pt: PIXI.Point): PIXI.Point => {
      const i = Math.round(pt.x / spacing);
      const j = Math.round(pt.y / spacing);

      const neighbors: PIXI.Point[] = [];

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const ni = i + dx;
          const nj = j + dy;
          if (dx === 0 && dy === 0) continue;
          if (ni >= 0 && ni < cols && nj >= 0 && nj < rows) {
            neighbors.push(points[ni][nj]);
          }
        }
      }

      return neighbors[Math.floor(Math.random() * neighbors.length)];
    };

    const buildWeb = () => {
      const next = getRandomNeighbor(current);
      moveSpider(current, next, buildWeb);
    };

    spider.x = current.x;
    spider.y = current.y;
    buildWeb();

    return () => {
      app.destroy(true, true);
    };
  }, []);

  return <div ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
