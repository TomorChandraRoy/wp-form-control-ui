import { useBlockProps } from "@wordpress/block-editor";
import {
  Button,
  CheckboxControl,
  ExternalLink,
  FormFileUpload,
  FormTokenField,
  __experimentalInputControl as InputControl,
  ResponsiveWrapper,
  SelectControl,
  TextControl,
  __experimentalNumberControl as NumberControl,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderControl as BorderControl,
} from "@wordpress/components";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import "../../editor.scss";
import { useState } from "react";

const skills = ["PHP", "Javascript"];

const colors = [
  { name: "Blue 20", color: "#72aee6" },
  // ...
];

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;

  const [userName, setUserName] = useState("");
  // console.log(userName);

  const [emaill, setEmail] = useState("");
  // console.log(email);

  const [passwordd, setPassword] = useState();
  // console.log(password);

  const [genderr, setGender] = useState("");
  // console.log(gender);

  const [selectedSkills, setSelectedSkills] = useState([]);
  // console.log(selectedSkills);

  const [addresss, setAddress] = useState("");
  // console.log(address);

  const [numder, setNumder] = useState("");
  // console.log(numder);


  const [agee, setAge] = useState("");
  // console.log(age);

  const [dateOfBirth, setDateOfBirth] = useState();
  // console.log(dateOfBirth);

  const [bioo, setBio] = useState("");
  // console.log(bio);

  const [widthData, setWidthData] = useState("");
  // console.log(widthData);

  const [control, setControl] = useState("");
  // console.log(control);

  const [borderr, setBorder] = useState();
  // console.log(border);

  const [fileName, setFileName] = useState("");
  // console.log(fileName);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const [isChecked, setChecked] = useState(true);
  // console.log(isChecked);



    const handleData = () => {
      const dataa = {
        username: userName,
        email: emaill,
        password: passwordd,
        gender: genderr,
        skills: [selectedSkills],
        address: addresss,
        phone: numder,
        profile_pic: fileName,
        isAgreeWithTerms: isChecked,
        age: agee,
        dateofBirth: dateOfBirth,
        favoriteColor: widthData,
        bio: bioo,
        profilePage: {
          containerWidth: control,
          padding: widthData,
          border: {borderr}
        }
      };
      console.log(dataa);
    }


  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">
          {purposeType === "test" ? (
            <>
              <ResponsiveWrapper naturalWidth={2000} naturalHeight={1500}>
                <img
                  src="https://i.ibb.co.com/Q9M3JPt/1686645486825.jpg"
                  alt="WordPress"
                />
              </ResponsiveWrapper>

              <InputControl
                __next40pxDefaultSize
                label="UserName"
                placeholder="YourName"
                value={userName}
                onChange={(nextValue) => setUserName(nextValue ?? "")}
              />
              <div className="margin-vertical">
                <TextControl
                  label="Email"
                  placeholder="YourEmail"
                  value={emaill}
                  onChange={(value) => setEmail(value)}
                />
              </div>

              <TextControl
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                label="Password"
                placeholder="Your Password"
                value={passwordd}
                onChange={(number) => setPassword(number)}
              />

              <div className="margin-vertical">
                <SelectControl
                  value={genderr || ""}
                  onChange={(selectedUser) => {
                    setGender(selectedUser);
                  }}
                  label="Gender"
                  options={[
                    { value: "", label: "Select a Gender", disabled: true },
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                />
              </div>

              <FormTokenField
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label="Type a Skills"
                onChange={(skills) => {
                  setSelectedSkills(skills);
                }}
                suggestions={skills}
                value={selectedSkills}
              />
              <div className="margin-vertical">
                <TextControl
                  __nextHasNoMarginBottom
                  __next40pxDefaultSize
                  label="Address"
                  placeholder="Your Address"
                  value={addresss}
                  onChange={(value) => setAddress(value)}
                />
              </div>

              <NumberControl
                label="Numder"
                placeholder="Your Phone Numder"
                value=""
                isPressEnterToChange
                onChange={(nextValue) => setNumder(nextValue)}
              />
              <div className="margin-vertical">
                <NumberControl
                  label="Age"
                  placeholder="Your Age"
                  value=""
                  isPressEnterToChange
                  onChange={(nextValue) => setAge(nextValue)}
                />
              </div>

              <div className="margin-vertical">
                <InputControl
                  __next40pxDefaultSize
                  label="DateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(nextValue) => setDateOfBirth(nextValue ?? "")}
                />
              </div>
              <div className="margin-vertical">
                <TextControl
                  __nextHasNoMarginBottom
                  __next40pxDefaultSize
                  label="Bio"
                  placeholder="Your Bio"
                  value={bioo}
                  onChange={(bioBata) => setBio(bioBata)}
                />
              </div>

              <div className="margin-vertical">
                <h4> Profile Page Size:</h4>
                <UnitControl
                  __next40pxDefaultSize
                  label="Width"
                  onChange={(width) => setWidthData(width)}
                  value="10px"
                />
              </div>
              <div className="margin-vertical">
                <BoxControl
                  label="Padding"
                  onChange={(vaule) => setControl(vaule)}
                />
              </div>

              <BorderControl
                colors={colors}
                label="border"
                onChange={(newBorder) => setBorder(newBorder)}
                value={borderr}
              />
              <div className="margin-vertical">
                <FormFileUpload
                  accept="image/*"
                  onChange={handleFileChange}
                  render={({ openFileDialog }) => (
                    <div>
                      <Button isSecondary onClick={openFileDialog}>
                        Upload image
                      </Button>
                      <span style={{ marginLeft: "10px" }}>
                        {fileName ? fileName : "No file chosen"}
                      </span>{" "}
                      {/* Show file name or "No file chosen" */}
                    </div>
                  )}
                />
              </div>

              <CheckboxControl
                __nextHasNoMarginBottom
                label={
                  <>
                    I agree to the defined{" "}
                    <ExternalLink href="https://wordpress.org">
                      terms, conditions, and policies
                    </ExternalLink>
                  </>
                }
                checked={isChecked}
                onChange={setChecked}
              />

              <Button isPrimary onClick={handleData} className="margin-vertical">Submit</Button>
            </>
          ) : (
            <p>
              If someone sends you an invitation to a party, for example, they
              are telling you what time to arrive and what the sender is
              celebrating, and they might even.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default Edit;
