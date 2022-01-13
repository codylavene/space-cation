import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as spotActions from "../../store/spots";

const EditSpotForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);
  const currSpot = useSelector((state) => state.spots.currSpot);
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState(currSpot?.name);
  const [type, setType] = useState(currSpot?.type);
  const [title, setTitle] = useState(currSpot?.title);
  const [pets, setPets] = useState(currSpot?.pets);
  const [totalOccupancy, setTotalOccupancy] = useState(
    currSpot?.totalOccupancy
  );
  const [totalBedrooms, setTotalBedrooms] = useState(currSpot?.totalBedrooms);
  const [totalBathrooms, setTotalBathrooms] = useState(
    currSpot?.totalBathrooms
  );
  const [description, setDescription] = useState(currSpot?.description);
  const [hasWifi, setWifi] = useState(currSpot?.hasWifi);
  const [hasTV, setTV] = useState(currSpot?.hasTV);
  const [hasAC, setAC] = useState(currSpot?.hasAC);
  const [hasHeat, setHeat] = useState(currSpot?.hasHeat);
  const [price, setPrice] = useState(currSpot?.price);
  const [image, setImage] = useState(currSpot?.name);
  // const [postedAt, setPosted] = useState(new Date())
  const [coordinates, setCoordinates] = useState(currSpot?.coordinates);
  // const [hostId, setHostId] = useState(sessionUser.id);
  const reset = () => {
    setName(currSpot?.name);
    setType(currSpot?.type);
    setTitle(currSpot?.title);
    setPets(currSpot?.pets);
    setTotalOccupancy(currSpot?.totalOccupancy);
    setTotalBedrooms(currSpot?.totalBedrooms);
    setTotalBathrooms(currSpot?.totalBathrooms);
    setDescription(currSpot?.description);
    setWifi(currSpot?.hasWifi);
    setTV(currSpot?.hasTV);
    setAC(currSpot?.hasAC);
    setHeat(currSpot?.hasHeat);
    setPrice(currSpot?.price);
    setCoordinates(currSpot?.coordinates);
    console.log(currSpot?.Images);
    setImage(currSpot?.image);
  };
  // useEffect(() => {
  //   reset();
  // }, [currSpot]);
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
        coordinates,
        hostId: sessionUser.id,
      },
      //   image,
    };

    resetSelections();
    reset();
    const id = currSpot.id;
    dispatch(spotActions.editOneSpot(id, data.spot))
      .then(() => {
        setShowModal(false);
      })
      .catch(async (res) => {
        // console.log(res);
        const data = await res;
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
    // return <Redirect to={`/places/${newSpot.id}`} />;
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

  // const updateFile = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   if (file) setImage(file);
  // };
  const selectToggle = (e) => {
    e.target.classList.toggle("selected");
  };
  return (
    <div className="add-place-modal">
      <div className="header">
        <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        <span>Edit {currSpot?.name}</span>
      </div>
      <form onSubmit={onSubmit} className="add-place-form">
        <ul className="errors">
          {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
        </ul>
        <div className="select-container">
          <label>
            Type of Property
            <select
              className="select-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Space Station">Space Station</option>
              <option value="Satellite">Satellite</option>
              <option value="Moon">Moon</option>
              <option value="Mars">Mars</option>
            </select>
          </label>
        </div>
        <div className="add-place-inputs">
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
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us about the property!"
          // required
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
              className={`amenity ${hasWifi ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setWifi(!hasWifi);
              }}
            >
              Wifi
            </div>
            <div
              className={`amenity ${pets ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setPets(!pets);
              }}
            >
              Pets Allowed
            </div>
            <div
              className={`amenity ${hasTV ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setTV(!hasTV);
              }}
            >
              TV
            </div>
            <div
              className={`amenity ${hasAC ? "selected" : ""}`}
              onClick={(e) => {
                selectToggle(e);
                setAC(!hasAC);
              }}
            >
              Air Conditioning
            </div>
            <div
              className={`amenity ${hasHeat ? "selected" : ""}`}
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
        {/* <label>
          Add an Image!
          <input type="file" name="image" onChange={updateFile}></input>
        </label> */}
        <button>Submit Edit</button>
      </form>
    </div>
  );
};

export default EditSpotForm;
