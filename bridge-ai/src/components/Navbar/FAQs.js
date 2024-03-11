import React from "react";
import './FAQs.css'
import exit from './icons/x-symbol.svg'
import { Link } from 'react-router-dom'

const HowTo = () => {
  const closeMenu = (e) => {
    e.preventDefault();
    window.location.href = '/Main';
    }
  return (
    <div className="container">
      <div className="header">
        <div className="section">
          Frequently Asked Questions
        </div>
        <Link to='/Main'><img src={exit} className='x-icon' alt='x' onClick={closeMenu} /></Link>
        </div>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec ipsum erat. Nulla in suscipit neque. In elit purus, venenatis eget lacinia congue, maximus eget ex. Praesent vitae scelerisque metus, ut posuere metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vitae rhoncus purus. Nulla ornare purus vitae leo luctus, ac rutrum nibh blandit. Suspendisse potenti. Curabitur feugiat neque rhoncus justo pharetra egestas. Nam feugiat molestie sodales. Sed mattis at nulla ut laoreet. Donec ultricies diam a dolor ullamcorper, non dictum quam hendrerit. Fusce semper urna mi, sed blandit lorem venenatis quis. Phasellus urna mauris, pellentesque et bibendum eu, pulvinar ut enim. Ut dolor justo, auctor ac elementum sit amet, porta non quam. Vivamus interdum justo id nisl pulvinar, sit amet tincidunt sapien eleifend.

Nulla commodo nunc non ante luctus, nec molestie libero consequat. Duis leo felis, lobortis vitae ornare at, pharetra a nulla. Nunc nec sapien mi. Etiam molestie rutrum arcu a luctus. Duis sit amet ultricies elit, a scelerisque massa. Curabitur sit amet leo quis diam iaculis vehicula id at ligula. In consequat erat quis nibh varius, non condimentum felis fringilla. Mauris sagittis consequat ipsum, ac rutrum risus. Donec efficitur turpis diam, sit amet posuere nunc dignissim sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet dui vel turpis egestas egestas in a dolor. Morbi aliquet ex ac tellus pharetra molestie. Aenean tincidunt nec lorem id consectetur. Suspendisse semper nulla in accumsan convallis. Vestibulum laoreet, risus blandit tempus porttitor, dolor magna porta felis, ac posuere augue dui non nisi. Ut eros urna, lobortis in est at, commodo porta turpis.

Duis gravida sapien eu velit imperdiet consectetur. Curabitur efficitur leo enim, non luctus lacus lobortis at. Donec euismod lorem massa, convallis vulputate dolor rhoncus at. Integer lobortis eleifend ornare. Praesent nisl nisl, luctus eget tempus vel, tempor id odio. Nunc tristique semper eleifend. Vestibulum iaculis at risus ut suscipit. Duis id ipsum at lectus dictum euismod eget nec dui. Duis at sodales enim. Vestibulum ut cursus nisi, nec semper mauris. Praesent tempor ipsum eu semper semper. Cras in tortor sodales nunc auctor commodo eget et neque. Donec magna odio, scelerisque vel congue id, volutpat a elit. Fusce porta facilisis sapien sed suscipit.

Pellentesque vitae risus et lorem mattis pretium. Phasellus condimentum neque nec libero lobortis, nec pharetra nisi elementum. Mauris nec purus in dui pharetra dictum ac id ante. Proin dictum, ligula a condimentum dapibus, turpis dolor congue magna, at vestibulum nunc mauris quis libero. Nullam non laoreet nisi. Quisque congue justo ac condimentum tincidunt. Quisque hendrerit pellentesque suscipit. Nulla eu pulvinar tellus, ut pulvinar libero. Cras pulvinar tristique ex suscipit sodales. In semper justo a risus pretium, et viverra felis accumsan. Pellentesque porttitor nisi ex. Cras luctus, nibh et viverra tincidunt, nisl leo rutrum elit, quis luctus felis nisl et ipsum.

Donec porttitor scelerisque elementum. Morbi elementum ante nisl, at consequat elit aliquet eget. Duis sodales cursus nulla quis ullamcorper. Sed vehicula cursus purus, at varius est finibus ac. Curabitur vitae ullamcorper ligula. Donec suscipit metus orci, at hendrerit ex imperdiet ac. Nullam at varius turpis.

</p>
    </div>
  )
}

export default HowTo;
