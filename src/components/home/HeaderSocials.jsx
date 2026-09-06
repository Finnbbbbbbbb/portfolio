import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Finnbbbbbbbb' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
        </div>
    );
};

export default HeaderSocials;
