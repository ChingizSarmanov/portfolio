const Cursor = ({ mousePosition }) => (
  <div
    className="fixed w-8 h-8 border border-white rounded-full mix-blend-difference pointer-events-none z-50 transition-transform duration-300"
    style={{
      left: mousePosition.x,
      top: mousePosition.y,
      transform: 'translate(-50%, -50%)'
    }}
  />
);

export default Cursor;
