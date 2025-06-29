const Bottom = () => {
  return (
    <div className="container-fluid px-0">
      <div className="d-flex justify-content-between align-items-center px-4 py-2" style={{ borderTop: '1px solid #eee', borderRadius: '0 0 8px 8px', background: '#fff' }}>
        <img
          src="/SVG/save_1.svg"
          alt="back"
          style={{ height: '2.5rem', cursor: 'pointer' }}
          onClick={() => alert('Back action clicked!')}
        />
        <img
          src="/SVG/save.svg"
          alt="save"
          style={{ height: '2.5rem', cursor: 'pointer' }}
          onClick={() => alert('Save action clicked!')}
        />
      </div>
    </div>
  );
};

export default Bottom;
