import { SocketContext } from "../SocketContext";
import { useContext } from "react";

const Notifications = ({patient}) => {
	const { answerCall, call, callAccepted } = useContext(SocketContext);

	return (
		<>
			{call.isReceivingCall && !callAccepted && (
				// <div style={{ display: "flex", justifyContent: "space-around" }}>
				// 	<h1>{call.name} is calling:</h1>
				// 	<button onClick={answerCall}>Answer</button>
				// </div>
				<div className="accept">
					<p style={{ color: "#006", fontWeight: "bold" }}>
						{call.name} is calling <span style={{ color: "orange" }}>.....</span>
					</p>
					<button onClick={answerCall} className="accept-btn">
						Accept call and share video
					</button>
				</div>
			)}

			{/* {call.isReceivingCall && !callAccepted && "wait"} */}
		</>
	);
};

export default Notifications;
