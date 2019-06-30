import ImageToggleOnScroll from "./imageToggleOnScroll";

const ParagliderDetail = React.memo(
  ({
    id,
    name,
    classA,
    classB,
    favorite,
    description,
    onHeartFavoriteHandler
  }) => {
    return (
      <div className="card col-4 cardmin pt-3">
        <ImageToggleOnScroll
          className="card-img-top"
          primaryImg={`/static/paragliders/${name.replace(" ", "")}.jpg`}
          secondaryImg={`/static/paragliders/${name}A.jpg`}
          alt="{Name}"
        />

        <div className="card-body">
          <h4 className="card-title">
            <button
              data-sessionid={id}
              className={favorite ? "heartredbutton" : "heartdarkbutton"}
              onClick={e => {
                onHeartFavoriteHandler(e, !favorite);
              }}
            />
            <span>{name}</span>
          </h4>

          <span>
            <strong>Class </strong>
            {classA ? "A" : "B"}
          </span>
          <br />
          <span>{description}</span>
        </div>
      </div>
    );
  }
);

export default ParagliderDetail;
