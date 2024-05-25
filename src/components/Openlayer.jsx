import React, {useEffect, useRef} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {OSM} from "ol/source";
import * as olProj from "ol/proj";
import "ol/ol.css";
import "../App.css";
import {DragRotate, Draw} from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

function Openlayer() {
    const mapRef = useRef(null);
    let map;

    const source = new VectorSource({wrapX: false});

    const vector = new VectorLayer({
        source: source,
    });

    useEffect(() => {
        olProj.useGeographic();

        map = new Map({
            view: new View({
                center: [39.9392, 32.8962],
                zoom: 4,
                maxZoom: 6,
                minZoom: 1,
                /*rotation: 0.25*/
            }),
            layers: [
                new TileLayer({
                    source: new OSM({
                        crossOrigin: 'anonymous'
                    })
                }), vector
            ],
            target: mapRef.current,
            keyboardEventTarget: document
        });

        map.on('click', function (e) {
            const coordinates = e.coordinate;
            console.log(coordinates);
        });

        const isAltKeyPressed = (event) => event.altKey;

        const dragRotateInteraction = new DragRotate({
            condition: isAltKeyPressed
        });
        map.addInteraction(dragRotateInteraction);

        const drawInteraction = new Draw({
            type: "Polygon",
            freehand: true,
            source: source
        })
        map.addInteraction(drawInteraction);

    }, []);

    return (
        <>
            <div id="js-map" className="map" ref={mapRef}/>
        </>
    );
}

export default Openlayer;
