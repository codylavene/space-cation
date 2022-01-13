import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as spotActions from "../../store/spots";

const AddPlaceForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);
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
  // useEffect(() => {
  //   const errs = [];
  //   if (name.length === 0) errs.push("You must provide a name");
  //   if (title.length === 0) errs.push("You must provide a title");
  //   if (totalBathrooms === 0)
  //     errs.push("You must provide at least one bathroom for your guests");
  //   if (totalBedrooms === 0)
  //     errs.push("You must provide Bedrooms to your guests");
  //   if (totalBathrooms === 0)
  //     errs.push("You must provide bathrooms to your guests");
  //   if (name.length === 0) errs.push("You must provide a name");
  //   if (name.length === 0) errs.push("You must provide a name");
  //   if (name.length === 0) errs.push("You must provide a name");
  // }, [
  //   name,
  //   title,
  //   totalBathrooms,
  //   totalBedrooms,
  //   totalOccupancy,
  //   description,
  //   price,
  // ]);
  const onSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
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

    resetSelections();
    reset();
    dispatch(spotActions.addNewSpot(data))
      .then(() => {
        setTimeout(() => {
          spotActions.getHostsSpots(sessionUser);
        }, 100);
        setShowModal(false);
      })
      .catch(async (res) => {
        console.log(res);
        const data = await res;
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
    // setWifi(false);
    // setTV(false);
    // setAC(false);
    // setHeat(false);
    setPrice("");
    setImage("");
    setCoordinates("");
    resetSelections();
  };
  const resetSelections = () => {
    setWifi(false);
    setTV(false);
    setAC(false);
    setHeat(false);
    document
      .querySelectorAll(".selected")
      .forEach((each) => each.classList.remove("selected"));
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) setImage(file);
  };
  const selectToggle = (e) => {
    e.target.classList.toggle("selected");
  };
  return (
    <div className="add-place-modal">
      <div className="header">
        <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        <span>Add a Place</span>
      </div>
      <form onSubmit={onSubmit} className="add-place-form">
        <ul className="errors">
          {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
        </ul>
        <label>
          Type of Property
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Space Station">Space Station</option>
            <option value="Satellite">Satellite</option>
            <option value="Moon">Moon</option>
            <option value="Mars">Mars</option>
          </select>
        </label>
        <div className="add-place-inputs">
          <input
            className="top-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What would you like to name this property?"
            required
          />
          <input
            className="mid-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="The main title to be displayed"
            required
          />

          <input
            type="number"
            value={totalOccupancy}
            min={1}
            onChange={(e) => setTotalOccupancy(e.target.value)}
            placeholder="How many people can this property host?"
            required
          />
          <input
            type="number"
            value={totalBedrooms}
            min={1}
            onChange={(e) => setTotalBedrooms(e.target.value)}
            placeholder="How many bedrooms?"
            required
          />
          <input
            type="number"
            value={totalBathrooms}
            min={1}
            onChange={(e) => setTotalBathrooms(e.target.value)}
            placeholder="How many bathrooms?"
            required
          />

          <input
            type="text"
            value={coordinates}
            onChange={(e) => setCoordinates(e.target.value)}
            placeholder="What are the Coordinates of the property? (format: 'latitude, longitude')"
            required
          />
          <input
            className="bottom-input"
            type="number"
            value={price}
            min={1}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price per night (format: '123456')"
            required
          />
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us about the property!"
          required
        />
        {/* <label>
          Pets Allowed?
          <select value={pets} onChange={(e) => setPets(e.target.value)}>
            <option value={"true"}>Yes</option>
            <option value={"false"}>No</option>
          </select>
        </label> */}
        <div className="amenities-options">
          Select all that apply:
          <div className="amenities">
            <div
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setWifi(!hasWifi);
              }}
            >
              Wifi
            </div>
            <div
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setPets(!pets);
              }}
            >
              Pets Allowed
            </div>
            <div
              className="amenity tv"
              onClick={(e) => {
                selectToggle(e);
                setTV(!hasTV);
              }}
            >
              TV
            </div>
            <div
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setAC(!hasAC);
              }}
            >
              Air Conditioning
            </div>
            <div
              className="amenity"
              onClick={(e) => {
                selectToggle(e);
                setHeat(!hasHeat);
              }}
            >
              Heat
            </div>
          </div>
          <div className="clear-selections" onClick={resetSelections}>
            Clear All Selections
          </div>
        </div>
        <label>
          Add an Image!
          <input type="file" name="image" onChange={updateFile}></input>
        </label>
        <button>Host this Place!</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
