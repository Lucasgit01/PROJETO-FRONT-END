import "../assets/Loading.css";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>

      <p className="loading-text">
        Carregando...
      </p>
    </div>
  );
}