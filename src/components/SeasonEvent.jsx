import './SeasonEvent.css';

function SeasonEvent() {
  return (
    <div className="season-event">
      <div className="season-event__text">
        <p className="season-event__text">
          End Of Season Event
          </p>
        <h2 className="season-event__title">
            Limited-Time Deals!
          </h2>
        <p className="season-event__text">
          Exclusions Apply
        </p>
      </div>
      <div className="season-event__buttons">
        <button className="season-event__button">
          Shop Sale
          </button>
        <button className="season-event__button">
          Shop Clearance
          </button>
      </div>
    </div>
  );
}

export default SeasonEvent;