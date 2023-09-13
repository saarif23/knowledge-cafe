import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center pt-10 border-b-2 '>
            <h1 className='text-center text-4xl my-8  font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;