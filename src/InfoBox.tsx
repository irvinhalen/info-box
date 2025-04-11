import "./App.css";

type InfoBoxProps = {
  title: string;
  text: string;
  linkText: string;
  linkUrl: string;
};

export const InfoBox = ({ title, text, linkText, linkUrl }: InfoBoxProps) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={() => openInNewTab(linkUrl)}>{linkText}</button>
    </div>
  );
};
