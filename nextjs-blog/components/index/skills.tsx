import { useEffect, useRef } from 'react';
import Matter, { Engine, Render, Events, MouseConstraint, Mouse, World, Bodies, Composite } from 'matter-js';

const Skills = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an engine
    const engine = Engine.create();
    const world = engine.world;
    
    if (!sceneRef.current) {
      return;
    }
    
    // Get dimensions of the wrapping div
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // Create a renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        background: '#000',
        wireframes: false,
      },
    });

    // Create bounds
    const ground = Bodies.rectangle(
      width / 2, height + 80, width + 320, 160, { isStatic: true, render: { visible: false } }
    );
    const wallLeft = Bodies.rectangle(-80, height / 2, 160, height, { isStatic: true, render: { visible: false } });
    const wallRight = Bodies.rectangle(width + 80, height / 2, 160, height, { isStatic: true, render: { visible: false } });
    const roof = Bodies.rectangle(
      width / 2, -80, width + 320, 160, { isStatic: true, render: { visible: false } }
    );

    const skills = ['ReactJS', 'NextJS', 'Github', 'Django', 'Python', 'C++', 'HTML5', 'CSS', 'Javascript', 'Typescript', 'MongoDB', 'MySQL', 'Postgres', 'Pytorch', 'Tensorflow', 'CNN', 'Resnet', 'Docker', 'HTMLOL'];

    const pills = skills.map(skill => {
      return Bodies.rectangle(Math.random() * width, 50, 150, 65, {
        chamfer: { radius: 30 },
        render: {
          sprite: {
            texture: `/images/${skill}.png`,
            xScale: 1,
            yScale: 1,
          },
        },
      });
    });

    // Add all of the bodies to the world
    Composite.add(world, ground);
    Composite.add(world, wallLeft);
    Composite.add(world, wallRight);
    for (let item of pills){
      Composite.add(world, item)
    }

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
    });

    World.add(world, mouseConstraint);
    
    // Keep the mouse in sync with rendering
    mouseConstraint.mouse = mouse;

    // Allow page scrolling in matter.js window
    // mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    // mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    // Detect clicks vs. drags
    let click = false;

    document.addEventListener('mousedown', () => click = true);
    document.addEventListener('mousemove', () => click = false);
    document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

    // Run the engine
    Engine.run(engine);

    // Run the renderer
    Render.run(render);

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      World.clear(world, true);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div className='mx-4 md:mx-20 h-screen'>
      <div className='w-full h-[70vh] md:h-2/3 border border-white rounded-2xl md:rounded-[5rem] overflow-hidden' ref={sceneRef} />
    </div>
  );
};

export default Skills;
