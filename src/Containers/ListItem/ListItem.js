import PropTypes from "prop-types";
import {
  ListItemContainer,
  ListItemAvatar,
  ListItemColorPicker,
  LabelInput,
} from "./Styles";
import user from "./user.svg";
import { BiDotsVerticalRounded, BiEdit, BiLabel } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { MdLabelOutline, MdWork } from "react-icons/md";
import { createRef, useEffect, useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useEmployees } from "../../Hooks";
import { updateEmployee } from "../../Actions/employees.action";

const ListItem = ({
  colorPickerId,
  setColorPickerId,
  employee,
  editingItem,
  setEditingItem,
  ...props
}) => {
  const { uuid, company, bio, name, title, avatar, color, label } = employee;
  //refs
  const pickerRef = createRef();
  const inputRef = createRef();

  //states
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [viewAvatar, setViewAvatar] = useState(false);
  const [state, dispatch] = useEmployees();

  //methods
  const onChangeColor = (color) => {
    const user = { ...employee, color };
    dispatch(
      updateEmployee({
        user,
        ...state,
      })
    );
  };

  const onChangeLabel = (label) => {
    const user = { ...employee, label };
    dispatch(
      updateEmployee({
        user,
        ...state,
      })
    );
  };

  const handleClickOutside = (e) => {
    if (pickerRef.current && pickerRef.current.contains(e.target)) {
      // inside of picker clicked
      return;
    }
    // outside of picker clicked
    setShowColorPicker(false);
    setColorPickerId(false);
  };

  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker]);

  return (
    <>
      <ListItemContainer bgColor={color || "#4481eb"}>
        <BiDotsVerticalRounded
          className="close"
          onClick={() => {
            setColorPickerId(uuid);
            setShowColorPicker(true);
            pickerRef.current.focus();
          }}
        />

        <div ref={pickerRef} onClick={(e) => pickerRef.current.focus()}>
          <ListItemColorPicker
            triangle="hide"
            color={color || "#4481eb"}
            className={colorPickerId === uuid ? "visible" : ""}
            onChangeComplete={(color) => {
              onChangeColor(color?.hex);
            }}
            colors={[
              "#D9E3F0",
              "#F47373",
              "#697689",
              "#37D67A",
              "#2CCCE4",
              "#555555",
              "#dce775",
              "#ff8a65",
              "#ba68c8",
              "#4481eb",
            ]}
            bgColor={color || "#4481eb"}
          />
        </div>
        <article>
          <h2>{name}</h2>
          <div className="company">
            <HiOfficeBuilding /> &nbsp; {company}
          </div>
          <div className="title">
            <MdWork /> &nbsp;{title}
          </div>

          <div className="pic">
            <ListItemAvatar
              src={avatar && avatar !== "0" ? avatar : user}
              onError={(e) => {
                e.target.src = user;
                e.target.classList.add("not-clickable");
              }}
              onClick={() => {
                setViewAvatar({
                  src: avatar && avatar !== "0" ? avatar : "images/user.svg",
                  title: name,
                });
              }}
            />
          </div>

          <div
            className="desc"
            dangerouslySetInnerHTML={{
              __html: bio && bio !== "0" ? bio : "User has no biography!",
            }}
          />
        </article>
        <div className="actions">
          {editingItem !== uuid && (
            <button className="btn" onClick={() => setEditingItem(uuid)}>
              <span className={label && "has-label"}>
                {label && (
                  <>
                    <BiLabel fontSize={15} />
                    &nbsp;
                  </>
                )}
                {label ?? "Edit Label"}
              </span>
              <BiEdit className="icon" />
            </button>
          )}
          {editingItem === uuid && (
            <>
              <span className="btn clicked">
                <AiOutlineCloseCircle
                  color="red"
                  fontSize={20}
                  onClick={() => setEditingItem(false)}
                  style={{ zIndex: 10 }}
                />
                <LabelInput
                  name="label"
                  ref={inputRef}
                  placeholder="Enter item label"
                  autoFocus
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      onChangeLabel(inputRef?.current?.value);
                      setEditingItem(false);
                    }
                  }}
                />
                <AiOutlineCheckCircle
                  color="green"
                  fontSize={20}
                  onClick={() => {
                    onChangeLabel(inputRef?.current?.value);
                    setEditingItem(false);
                  }}
                  style={{ zIndex: 10 }}
                />
              </span>
            </>
          )}
        </div>
      </ListItemContainer>
      {viewAvatar?.src && (
        <Lightbox
          image={viewAvatar?.src}
          title={viewAvatar?.title}
          onClose={() => {
            setViewAvatar(false);
          }}
        />
      )}
    </>
  );
};

ListItem.defaultProps = {
  title: "",
};

ListItem.propTypes = {
  title: PropTypes.any,
  uuid: PropTypes.string,
  company: PropTypes.any,
  bio: PropTypes.any,
  name: PropTypes.any,
  title: PropTypes.any,
  avatar: PropTypes.string,
  onChangeColor: PropTypes.func,
};

export default ListItem;
