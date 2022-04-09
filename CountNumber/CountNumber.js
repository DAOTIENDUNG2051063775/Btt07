import CountNumber from "../../actions/CountWhenScroll/CountWhenScroll";
import './CountNumber.css'
function CountWhenScroll() {  
  const counter = [
    {
      id: "0",
      number: 9025,
      heading: "Học viên đã tốt nghiệp đã và đang làm việc tại hơn 5 quốc gia",
    },
    {
      id: "1",
      number: 95,
      heading: "Phần trăm học viên biết tiếng anh Chuyên ngành sau tốt nghiệp",
    },
    {
      id: "2",
      number: 160,
      heading: "Dự án học viên Citrine đã thực hiện trong và ngoài nước",
    },
    {
      id: "3",
      number: 1500,
      heading: "Mức lương trung bình (đơn vị: $) nhận được của học viên sau tốt nghiệp 1,5 - 3 năm",
    },
  ];

  let listCounter = counter.map((card, index) => {
    return <CountNumber max={card.number} time={5} title={card.heading} key={index} />;
  });


  return (
    <div className="App">
      <section className="counter-section style-two">
        <div className="auto-container">
          <div className="inner-container">
          <div className="fact-counter">
            <div className="row clearfix">
          {listCounter}
          </div>
          </div>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default CountWhenScroll;
