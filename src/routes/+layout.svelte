<script>
    import { signOut, onAuthStateChanged } from "firebase/auth";
    import { auth } from "./firebase";
    import { isLoggedIn, user } from "../stores";
    const logout = async () => {
        await signOut(auth)
            .then(() => {
                $isLoggedIn = false;
                $user = {};
            })
            .catch((err) => {
                console.log(err);
            });
    };

    onAuthStateChanged(auth, (authUser) => {
        $user = authUser;
        $isLoggedIn = !!authUser;
    });
</script>

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        {#if $isLoggedIn}
            <li><a href="/profile">Profile</a></li>
            <li><a href="/#" on:click={logout}>Logout</a></li>
        {:else}
            <li><a href="/login">Login</a></li>
        {/if}
    </ul>
</nav>

<slot />
