import './LoadMoreBtn.css';

function LoadMoreBtn({onClick}) {

    return(
        <button type="button" id="LoadMoreBtn" onClick={onClick} > Load More</button>
    )

}

export default LoadMoreBtn;