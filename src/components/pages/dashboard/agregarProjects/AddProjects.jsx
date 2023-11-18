import { useState } from "react";
import imagen_default from "../../../../../public/imagenes/defaults/imagen_default.jfif";
import { uploadFile } from "../../../../firebaseConfig/FirebaseConfig";
import AddGallery3 from "./galleryImages/AddGallery3";

const AddProjectsContainer = () => {
	const [formData, setFormData] = useState({
		name: "",
		image_ppal: "",
		slides: {
			slides1_en: "",
			slides1_es: "",
			slides2_en: "",
			slides2_es: "",
		},
		memories: { memorie_en: "", memorie_es: "" },
		gallery: [],
	});
	const [file, setFile] = useState(null);
	const [isImageUpload, setIsImageUpload] = useState(false);
	const [loadingImage, setLoadingImage] = useState(false);

	// PARA MANEJAR VARIAS IMAGENES
	/* 	const [selectedGalleryImages, setSelectedGalleryImages] = useState([]);
	const [uploadingImages, setUploadingImages] = useState([]);

	// La función de subir recorre el array y sube todas:
	const uploadGalleryImages = async () => {
		setUploadingImages(selectedGalleryImages.map((img) => img.name));

		const uploadedImages = [];

		for (let img of selectedGalleryImages) {
			const url = await uploadFile(img);
			uploadedImages.push({ url });
		}

		// setea las URLs subidas
		setFormData((prev) => ({
			...prev,
			gallery: [...prev.gallery, ...uploadedImages],
		}));

		setUploadingImages([]);
	}; */

	const handleImageUpload = async (file) => {
		try {
			setLoadingImage(true);
			let url = await uploadFile(file);
			setIsImageUpload(true);
			setFormData((prevData) => ({
				...prevData,
				image_ppal: url,
			}));
			setLoadingImage(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("Valores del formulario a enviar: ", formData);

		/* 	const collectionRef = collection(db, "projects");

		try {
			await addDoc(collectionRef, newProject);

			//opcional: mostrar mensaje de exito
		} catch (error) {
			console.log(error);
		} */
	};

	return (
		<div>
			<h2>PROYECTOS</h2>
			<p>Listado - Agregar proyectos </p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Proyecto</label>
					<input
						type="text"
						placeholder="Nombre del proyecto"
						name="name"
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
				</div>
				<div>
					<label htmlFor="">Imagen del Listado</label>
					<img
						src={formData.image_ppal ? formData.image_ppal : imagen_default}
						alt=""
						width={300}
					/>
					<input
						type="file"
						name="image_ppal"
						onChange={(e) => setFile(e.target.files[0])} //subir la url primero a storage
					/>
					{file && (
						<button type="button" onClick={() => handleImageUpload(file)}>
							Cargar imagen!
						</button>
					)}
					{loadingImage && <p>Cargando imagen...</p>}
					{isImageUpload && <p>¡Imagen subida!</p>}

					{/* REVISAR */}
				</div>
				<div>
					<p>Ficha Slide 1 - Es</p>
					<textarea
						id=""
						cols="30"
						rows="10"
						name={formData.slides.slides1_es}
						value={formData.slides.slides1_es}
						onChange={(e) =>
							setFormData({
								...formData,
								slides: {
									...formData.slides,
									slides1_es: e.target.value,
								},
							})
						}
					></textarea>
					<p>Ficha Slide 1 - En</p>
					<textarea
						id=""
						cols="30"
						rows="10"
						name={formData.slides.slides1_en}
						value={formData.slides.slides1_en}
						onChange={(e) =>
							setFormData({
								...formData,
								slides: {
									...formData.slides,
									slides1_en: e.target.value,
								},
							})
						}
					></textarea>
					<p>Ficha Slide 2 - Es</p>
					<textarea
						id=""
						cols="30"
						rows="10"
						name={formData.slides.slides2_es}
						value={formData.slides.slides2_es}
						onChange={(e) =>
							setFormData({
								...formData,
								slides: {
									...formData.slides,
									slides2_es: e.target.value,
								},
							})
						}
					></textarea>
					<p>Ficha Slide 2 - En</p>
					<textarea
						id=""
						cols="30"
						rows="10"
						name={formData.slides.slides2_en}
						value={formData.slides.slides2_en}
						onChange={(e) =>
							setFormData({
								...formData,
								slides: {
									...formData.slides,
									slides2_en: e.target.value,
								},
							})
						}
					></textarea>
					<p>Memorias - Es</p>
					<textarea
						id=""
						cols="30"
						rows="10"
						name={formData.memories.memorie_es}
						value={formData.memories.memorie_es}
						onChange={(e) =>
							setFormData({
								...formData,
								memories: {
									...formData.memories,
									memorie_es: e.target.value,
								},
							})
						}
					></textarea>
					<p>Memorias - En</p>
					<textarea
						id=""
						cols="30"
						rows="10"
						name={formData.memories.memorie_en}
						value={formData.memories.memorie_en}
						onChange={(e) =>
							setFormData({
								...formData,
								memories: {
									...formData.memories,
									memorie_en: e.target.value,
								},
							})
						}
					></textarea>
				</div>

				<AddGallery3 setFormData={setFormData} formData={formData} />

				<button type="submit">Crear Producto</button>
			</form>
		</div>
	);
};

export default AddProjectsContainer;
