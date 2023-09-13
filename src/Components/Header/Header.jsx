import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-10 mx-10 border-b-2 '>
            <h1 className='text-center text-4xl p-5  font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;