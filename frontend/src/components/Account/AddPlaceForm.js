import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as spotActions from "../../store/spots";

const AddPlaceForm = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [type, setType] = useState("Space Station");
  const [title, setTitle] = useState("");
  const [pets, setPets] = useState(false);
  const [totalOccupancy, setTotalOccupancy] = useState("");
  const [totalBedrooms, setTotalBedrooms] = useState("");
  const [totalBathrooms, setTotalBathrooms] = useState("");
  const [description, setDescription] = useState("");
  const [hasWifi, setWifi] = useState(false);
  const [hasTV, setTV] = useState(false);
  const [hasAC, setAC] = useState(false);
  const [hasHeat, setHeat] = useState(false);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  // const [postedAt, setPosted] = useState(new Date())
  const [coordinates, setCoordinates] = useState("");
  // const [hostId, setHostId] = useState(sessionUser.id);
  const onSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    console.log("+++++++++++++==========", type);
    const data = {
      spot: {
        type,
        name,
        title,
        pets,
        totalOccupancy: parseInt(totalOccupancy, 10),
        totalBedrooms: parseInt(totalBedrooms, 10),
        totalBathrooms: parseInt(totalBathrooms, 10),
        description,
        hasWifi,
        hasTV,
        hasAC,
        hasHeat,
        price: parseInt(price, 10),
        postedAt: new Date(),
        coordinates,
        hostId: sessionUser.id,
      },
      image,
    };

    dispatch(spotActions.addNewSpot(data))
      .then(() => {
        resetSelections();
        reset();
        setShowModal(false);
      })
      .catch(async (res) => {
        const newSpot = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
    // return <Redirect to={`/places/${newSpot.id}`} />;
  };
  const reset = () => {
    setShowModal(false);
    setName("");
    setType("Space Station");
    setTitle("");
    setPets(false);
    setTotalOccupancy("");
    setTotalBedrooms("");
    setTotalBathrooms("");
    setDescription("");
    setWifi(false);
    setTV(false);
    setAC(false);
    setHeat(false);
    setPrice("");
    setImage("");
    setCoordinates("");
  };
  const resetSelections = () => {
    setWifi(false);
    setTV(false);
    setAC(false);
    setHeat(false);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) setImage(file);
  };
  return (
    <div className="add-place-modal">
      <div className="header">
        <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        <span>Add a Place</span>
      </div>
      <form onSubmit={onSubmit}>
        <ul className="errors">
          {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
        </ul>
        <div className="signup-inputs">
          <label>
            Type of Property
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Space Station">Space Station</option>
              <option value="Satellite">Satellite</option>
              <option value="Moon">Moon</option>
              <option value="Mars">Mars</option>
            </select>
          </label>
          <input
            className="top-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What would you like to call this Property?"
            // required
          />
          <input
            className="mid-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="The Main Title to be Displayed"
            // required
          />
          <label>
            Pets Allowed?
            <select value={pets} onChange={(e) => setPets(e.target.value)}>
              <option value={"true"}>Yes</option>
              <option value={"false"}>No</option>
            </select>
          </label>

          <input
            type="number"
            value={totalOccupancy}
            onChange={(e) => setTotalOccupancy(e.target.value)}
            placeholder="How many people can this property host?"
            // required
          />
          <input
            type="number"
            value={totalBedrooms}
            onChange={(e) => setTotalBedrooms(e.target.value)}
            placeholder="How many bedrooms?"
            // required
          />
          <input
            type="number"
            value={totalBathrooms}
            onChange={(e) => setTotalBathrooms(e.target.value)}
            placeholder="How many bathrooms?"
            // required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us about the property!"
            // required
          />
          <input
            type="text"
            value={coordinates}
            onChange={(e) => setCoordinates(e.target.value)}
            placeholder="What are the Coordinates of the property? (format: 'latitude, longitude')"
            // required
          />
          <input
            className="bottom-input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price per night (format: '123456')"
            // required
          />
          <div className="amenities-options">
            Select all that apply:
            <div className="clear-selections" onClick={resetSelections}>
              Clear All Selections
            </div>
            <div className="amenity" onClick={() => setWifi(true)}>
              Wifi
            </div>
            <div className="amenity" onClick={() => setTV(true)}>
              TV
            </div>
            <div className="amenity" onClick={() => setAC(true)}>
              Air Conditioning
            </div>
            <div className="amenity" onClick={() => setHeat(true)}>
              Heat
            </div>
          </div>
          <label>
            Add an Image!
            <input type="file" name="image" onChange={updateFile}></input>
          </label>
        </div>
        <button>Host this Place!</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
