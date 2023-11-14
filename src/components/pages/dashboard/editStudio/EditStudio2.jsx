import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig/FirebaseConfig";

const EditStudio2 = () => {
	const [textInitialState, setTextInitialState] = useState({});
	const [owTexts, setOwTexts] = useState({});

	useEffect(() => {
		let refCollection = collection(db, "studio");
		let refDoc = doc(refCollection, "d56Csm8bDohi6MVZ6nXA");
		let refDocOW = doc(refCollection, "ow");
		getDoc(refDoc).then((res) => {
			setTextInitialState(res.data());
		});
		getDoc(refDocOW).then((res) => {
			setOwTexts(res.data());
		});
	}, []);

	console.log(owTexts);
	return (
		<div>
			<h1>YOLANDAAAAAAAAAAAAAA</h1>
			<h3>Editar contenido</h3>
			<div>
				<p>Modulo 1</p>
				<textarea
					name=""
					id=""
					cols="30"
					rows="15"
					value={textInitialState?.textInitial_es}
					style={{ width: "100%" }}
				></textarea>
				<textarea
					name=""
					id=""
					cols="30"
					rows="15"
					value={textInitialState?.textInitial_en}
					style={{ width: "100%" }}
				></textarea>
			</div>
			<div>
				<p>Modulo 2</p>
				<div>
					<div>
						<p>Ordoñez</p>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							value={owTexts.o_es_text}
						></textarea>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							value={owTexts.o_en_text}
						></textarea>
					</div>
					<div>
						<p>Wenzle</p>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							value={owTexts.w_es_text}
						></textarea>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							value={owTexts.w_en_text}
						></textarea>
					</div>
				</div>
			</div>
			<div>
				<p>Modulo 3</p>
			</div>
			<div>
				<p>Modulo 4</p>
			</div>
		</div>
	);
};

export default EditStudio2;
