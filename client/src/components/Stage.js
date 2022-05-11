import React, {useEffect} from 'react'
import GridGallery from './GridGallery'
import { useSelector, useDispatch } from "react-redux";
import * as api from "../api/index.js";
import { getImages } from "../features/imagesSlice";

function Stage() {
        const dispatch = useDispatch();
        useEffect(() => {
          const fetchData = async () => {
            await api.fetchImages().then((response) => {
              dispatch({ type: getImages, payload: response });
            });
          };
      
          fetchData();
        }, []);
    return (
        <div>
            <GridGallery/>
        </div>
    )
}

export default Stage
