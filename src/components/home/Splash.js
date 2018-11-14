import React from "react";
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: 'https://images.unsplash.com/photo-1507469964576-83ad33be38d1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5f4675669a5c62bace7dbb2eaf061c3&auto=format&fit=crop&w=1399&q=80',
        altText: 'Man Throwing Disc',
        caption: '',
        header: 'The Disc Golf Lounge'
    },
    {
        src: 'https://www.maxpixel.net/static/photo/1x/Shadow-Gaevle-Nature-Disc-Golf-Shadows-Frisbee-1018529.jpg',
        altText: 'Disc Golf Basket in the Woods',
        caption: '',
        header: 'Disc Golf Lounge'
    },
    {
        src: 'https://c1.staticflickr.com/5/4691/24278520557_af4dff0f93_b.jpg',
        altText: 'Disc Golf Basket with Water in Background',
        caption: '',
        header: 'Disc Golf Lounge'
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/0/08/StaffordLake1.jpg',
        altText: 'Disc Golf in the Mountains',
        caption: '',
        header: 'Disc Golf Lounge'
    }
];

const Splash = (props) => {
    return (
        <div>
            <UncontrolledCarousel items={items} />
        </div>
    )
}

export default Splash