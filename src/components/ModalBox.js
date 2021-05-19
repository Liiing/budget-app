import '../scss/modalbox.scss';

function ModalBox({children, onClose}) {
	 
  return (
	<div className="modal-box-background">
		<div className="modal-box">
			<div className="close-button-container">
				<span className="close-button" onClick={onClose}>&times;</span>
			</div>
			<div className="modal-box-content">
				{children}
			</div>
		</div>
	</div>
  );
}

export default ModalBox;