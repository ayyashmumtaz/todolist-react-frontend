import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <div className="logo">TO DO LIST</div>
                <ul className="navigation">
                    <li><a href="#banner">HOME</a></li>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#review">REVIEWS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </HeaderStyle>
        </>

    )
}

const HeaderStyle = styled.div`
position: absolute;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
top: 0;
left: 0;
z-index: 1;
padding: 20px 60px;
background: #111;
position: fixed;
border-bottom: 1px solid #aaa;

.logo {
    color: #fff;
    font-weight: bold;
    font-size: 2.5em;
    text-decoration: none;
}

ul {
    margin-right: 200px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 60px;
    list-style: none;
}

    .navigation li a {
        text-decoration: none;
        color: #fff;
    }

    .navigation li a:hover {
        border-bottom: 1px solid #fff;
    }

    @media(max-width:991px) {
        header .navigation {
            display: none;
        }

            `;

export default Header