// Packages
import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

import { initDetails } from "../Components/InitDetails";
import { uploadYourVideo } from "../API/fetchData";

import { useNavigate } from "react-router-dom";

export default function UploadData() {
  const [details, setDetails] = useState({ ...initDetails });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in details) {
      if (details[key] === "") {
        setError(true);
      }
    }

    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      uploadYourVideo(details);
      navigate("/your-videos");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="UploadVideo">
      <form onSubmit={handleSubmit}>
        <Box className="Form-Container">
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Title"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Thumbnail URL</FormLabel>
            <Input
              onChange={handleChange}
              name="thumbnailUrl"
              type="text"
              placeholder="Thumbnail URL"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Author</FormLabel>
            <Input
              onChange={handleChange}
              name="author"
              type="text"
              placeholder="Author"
            />
          </FormControl>

          <FormControl className="upload-desc" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              onChange={handleChange}
              name="description"
              type="text"
              placeholder="Description"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Video URL</FormLabel>
            <Input
              onChange={handleChange}
              name="videoUrl"
              type="text"
              placeholder="Video URL"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Is Live</FormLabel>
            <Select onChange={handleChange} name="isLive">
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </Select>
          </FormControl>
        </Box>
        <Button onClick={handleSubmit} colorScheme="green">
          UPLOAD
        </Button>
        <Text className="error-text">
          {error ? "OOPS ! Wrong Details" : null}
        </Text>
      </form>
    </div>
  );
}
