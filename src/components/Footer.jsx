function Footer() {
  return (
	<footer className="footer">
		<div className="wave-container">
			<img src="/img/footer-wave.svg" draggable="false" style={{userSelect: "none"}} alt="Footer Wave" className="wave-svg" />
			<div className="footer-text">All copyright are open domain.</div>
		</div>
	</footer>
  );
}

export default Footer;