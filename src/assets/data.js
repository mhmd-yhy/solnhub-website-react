import images from "./images";
import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaShoppingCart,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/About",
    text: "About",
  },
  {
    url: "/Services",
    text: "Services",
  },
  {
    url: "/Qualities",
    text: "Qualities",
  },
  {
    url: "/Contact",
    text: "Contact",
  },
];
const services = [
  {
    id: 1,
    icon: <FaPaperPlane />,
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 2,
    icon: <BiDollarCircle />,
    title: "Trade Shows",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 3,
    icon: <FaRocket />,
    title: "Branding",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 4,
    icon: <FaEdit />,
    title: "Content Creation",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 5,
    icon: <ImMagicWand />,
    title: "Grpahic Design",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 6,
    icon: <FaShoppingCart />,
    title: "Media Buying",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
];

const about = [
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor",
  },
];

const qualities = [
  {
    id: 8,
    icon: <FaFileAlt />,
    title: "Ideas & Plans",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
  {
    id: 9,
    icon: <AiOutlineReload />,
    title: "Prompt Strategies",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
];

const features = [
  {
    id: 10,
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 11,
    title: "Trade Shows",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 12,
    title: "Branding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 13,
    title: "Content Creation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 14,
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 15,
    title: "Media Buying",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
];

const portfolio = [
  {
    id: 16,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_3,
  },
];

const testimonials = [
  {
    id: 19,
    name: "Marie Jordan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_1,
    rating: 3,
  },
  {
    id: 20,
    name: "Ann Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_2,
    rating: 5,
  },
  {
    id: 21,
    name: "Andrew Bill",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_3,
    rating: 2,
  },
  {
    id: 22,
    name: "Jason Stawer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_4,
    rating: 4,
  },
  {
    id: 23,
    name: "Lisa Green",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_5,
    rating: 2,
  },
  {
    id: 24,
    name: "Anna Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_6,
    rating: 4,
  },
];

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt />,
    info: "+425 235 712",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen />,
    info: "solnhub@info.com",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt />,
    info: "United Kingdom, New Street",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
];
const sosial = [{icon: <FaFacebook />}, {icon: <FaInstagram />}, {icon: <FaTwitter />}];

const sections = {links, services, about, qualities, features, portfolio, testimonials, contact, sosial};

export default sections;
