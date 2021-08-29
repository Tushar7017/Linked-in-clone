import React, { useEffect, useState } from 'react'
import '../style/Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';
import firebase from 'firebase/app';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser);

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db
            .collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            );
    }, [])

    const sendPost = (ev) => {
        ev.preventDefault();

        db
            .collection('posts')
            .add({
                name: user.displayName,
                description: user.email,
                message: input,
                photoUrl: user.photoUrl || "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        setInput('');
    }

    return (
        <div className='feed'>
            <div className='feed-inputContainer'>
                <div className='feed-input'>
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(ev) => setInput(ev.target.value)}
                            type='text'
                            placeholder='Start a post'
                        />
                        <button
                            onClick={sendPost}
                            type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOption
                        Icon={PhotoOutlinedIcon}
                        title="Photo"
                        color="#70b5f9"
                    />
                    <InputOption
                        Icon={YouTubeIcon}
                        title="Video"
                        color="#7fc15e"
                    />
                    <InputOption
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#e7a33e"
                    />
                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title="Write article"
                        color="#fc9295"
                    />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
