import user from "./components/Profile/user.json";
import statistics from "./components/Statistics/statistical-data.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics statistics={statistics} />
    </>
  );
}

export default App;
