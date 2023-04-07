import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Grid } from '@mui/material';
import Map, { Marker, FullscreenControl, NavigationControl, MapProvider } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function MapboxMap() {


    return (
        <Map
            initialViewState={{
                longitude: -3.916708,
                latitude: 5.343646,
                zoom: 12
            }}
            style={{ width: '100%', height: 200 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
            <Marker longitude={-3.916708} latitude={5.343646}  />
            <FullscreenControl />
            <NavigationControl position='top-right' />

        </Map>
    )
}

export default MapboxMap;
