function ProfileCard ({title,handle,image,description}) {
    console.log(title,handle,image);

// function ProfileCard (props) {

    // const title = props.title;
    // const handle = props.handle;

        //    const {title, handle} = props;

    return (
        <div className="card">
            <div className="Card-image">
               <figure className="image is-1by1">
               <img src={image} alt="pda logo" />
               </figure>
            </div>
            <div classname="card-content">
            <div className="media-content">
            <p className="title is-4"> {title} </p>
            <p className="subtitle is-4"> {handle} </p>
            </div>     
            <div className="content"> {description} </div> 
        </div>
        </div>
    );

}

export default ProfileCard;