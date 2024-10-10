import React from 'react'
import { Activity, Calendar, Users, Trophy } from 'lucide-react'

const Header = () => (
  <header className="bg-blue-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold flex items-center">
        <Activity className="mr-2" /> FC Constructorul Leova
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-blue-300">Home</a></li>
          <li><a href="#team" className="hover:text-blue-300">Team</a></li>
          <li><a href="#fixtures" className="hover:text-blue-300">Fixtures</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

const Hero = () => (
  <section id="home" className="bg-blue-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to FC Constructorul Leova</h2>
      <p className="text-xl mb-8">Building victories on and off the field</p>
      <a href="#team" className="bg-white text-blue-800 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">Meet Our Team</a>
    </div>
  </section>
)

const TeamSection = () => (
  <section id="team" className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="space-y-8">
        <TeamGroup title="Goalkeepers" players={["Tabarcea Ion", "Igor Manea"]} />
        <TeamGroup title="Defenders" players={["Alexandru Gaponenco", "Mostovei Ilie", "Dubceac Iulian", "Fanari Vadim", "Arabaji Dumitru"]} />
        <TeamGroup title="Midfielders" players={["Todorov Igor", "Cornescu Ilie", "Ciaricu Ion", "Botez Gheorghe", "Putregai Dorian", "Stoleru Marian", "Cravcenco Mihai", "Carp Vladimir"]} />
        <TeamGroup title="Forwards" players={["Jugaru Bogdan-Dumitru", "Istrati Sergiu"]} />
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold mb-2">Coach</h3>
          <p className="text-xl">Ruslan Diacenco</p>
        </div>
      </div>
    </div>
  </section>
)

const TeamGroup = ({ title, players }: { title: string, players: string[] }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player, index) => (
        <TeamMember key={index} name={player} position={title.slice(0, -1)} />
      ))}
    </div>
  </div>
)

const TeamMember = ({ name, position }: { name: string, position: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <Users className="mx-auto mb-2 text-blue-600" size={32} />
    <h4 className="text-lg font-semibold mb-1">{name}</h4>
    <p className="text-gray-600 text-sm">{position}</p>
  </div>
)

const FixturesSection = () => (
  <section id="fixtures" className="py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Fixtures</h2>
      <div className="space-y-4">
        <Fixture opponent="FC Ungheni" date="2024-04-15" time="15:00" />
        <Fixture opponent="Dinamo Chișinău" date="2024-04-22" time="16:30" />
        <Fixture opponent="Zimbru Orhei" date="2024-04-29" time="14:00" />
      </div>
    </div>
  </section>
)

const Fixture = ({ opponent, date, time }: { opponent: string, date: string, time: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
    <div className="flex items-center">
      <Calendar className="mr-4 text-blue-600" />
      <div>
        <h3 className="font-semibold">FC Constructorul Leova vs {opponent}</h3>
        <p className="text-gray-600">{date} at {time}</p>
      </div>
    </div>
    <Trophy className="text-yellow-500" />
  </div>
)

const Footer = () => (
  <footer id="contact" className="bg-blue-800 text-white py-8">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-2">Email: contact@fcconstructorulleova.md</p>
      <p className="mb-4">Phone: +373 123 456 789</p>
      <p>&copy; 2024 FC Constructorul Leova. All rights reserved.</p>
    </div>
  </footer>
)

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <TeamSection />
      <FixturesSection />
      <Footer />
    </div>
  )
}

export default App