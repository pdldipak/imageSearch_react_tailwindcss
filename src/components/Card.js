import './Card.css';
const Card = ({ image }) => {
   const tags = image.tags.split(',');
  return (
    <div className='card'>
      <img src={image.webformatURL} alt='' />
      <div className='card-body'>
              <div className='card-title'>Photo by {image.user}</div>
        <ul>
          <li>
            <strong>Views:</strong>{image.views}
          </li>
          <li>
            <strong>Downloads:</strong>{image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>{image.likes}
          </li>
        </ul>
      </div>
          <div className='card-content'>
              {tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
              ) )}
       
      </div>
    </div>
  );
};

export default Card;
