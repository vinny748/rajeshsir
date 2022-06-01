import imageOne from '../images/img1.jpg'

function Home() {
    return (
        <div className="text-center container">
            <p className="display-2 text-info">welcome to my app</p>
            <img src={imageOne} className='w-50' alt="" />
            <p className="lead">
                fjaksnm sdnsaudn asdhnjms dhashjnm
            </p>
        </div>
    );
}

export default Home;