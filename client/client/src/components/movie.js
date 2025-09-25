import React from "react";

function Movie({ data }) {
  if (!data) return null;
  console.log(data);

  const {
    Title,
    Year,
    Runtime,
    genre,
    Poster,
    imdbRating,
    imageUrl,
  } = data;

  const posterUrl = Poster ? Poster.replace(/^http:\/\//i, "https://") : "";
  const fallbackUrl = Array.isArray(imageUrl)
    ? imageUrl.find((u) => typeof u === "string" && /^https:\/\//i.test(u)) || ""
    : "";

  return (
    <div className="movie-card">
      <div className="movie-image-wrap">
        <img
          src={posterUrl ? posterUrl : fallbackUrl}
          alt={Title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget;
            if (fallbackUrl && img.dataset.fallbackUsed !== '1') {
              img.dataset.fallbackUsed = '1';
              img.src = fallbackUrl;
            } else {
              img.style.visibility = 'hidden';
            }
          }}
        />
      </div>
      <div className="movie-content">
        <h3 className="movie-title">{Title}</h3>
        <div className="movie-subtitle">
          {Year} · {genre}{Runtime ? ` · ${Runtime}` : ''}
        </div>
        <div className="movie-actions">
          <button className="buy-btn">Buy Tickets</button>
          {imdbRating && (
            <div className="rating">
              <span className="star">★</span>
              <span>{imdbRating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movie;