const Calorietemplete = (para) => {
  return (
    <div className="container">
      <div className="card">
        <h1>{para.mainheading}</h1>
        <p>you have consumed {para.cals} cals today</p>
      </div>
    </div>
  );
};
export default Calorietemplete;
