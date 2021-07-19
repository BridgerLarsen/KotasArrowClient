import { 
    faSortDown, 
    faChevronRight, 
    faChevronLeft, 
    faCaretRight,
    faPlus,
    faMinus,
    faEnvelope,
    faLock,
    faSignOutAlt,
    faTrash,
    faBan
  } from '@fortawesome/free-solid-svg-icons';
  import { faCopyright, faEdit } from '@fortawesome/free-regular-svg-icons';
  import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
  import { library } from '@fortawesome/fontawesome-svg-core';

const icons = () => {
    library.add(
        faSortDown, 
        faYoutube, 
        faFacebook,
        faInstagram, 
        faCopyright,
        faChevronRight,
        faChevronLeft,
        faCaretRight,
        faPlus,
        faMinus,
        faEnvelope,
        faLock,
        faSignOutAlt,
        faEdit,
        faTrash,
        faBan
      );
}

export default icons;