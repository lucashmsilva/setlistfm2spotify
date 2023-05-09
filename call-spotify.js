const axios = require('axios');

async function run() {
  const CF_ACCOUNT_ID = '96386c4bd04001a55fe2e5df53c3fb27';
  const CF_API_TOKEN = 'N34f-Jcev9DCfsmKVS8IsY3D_suKfuZd8kdEjxAN';
  const CF_EMAIL = 'lucashenrique580@gmail.com';
  const CF_API_KEY = '1fccc863095f1b03214c228efa2e6e83d639d';
  const SPOTIFYCREDS_NAMESPACE_ID = '600cbfa99f7242fca5d8e29e9b7a7804'

  try {

    const response = await axios.get(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${SPOTIFYCREDS_NAMESPACE_ID}/values/access_token`, {
      headers: {
        'Authorization': `Bearer ${CF_API_TOKEN}`,
        'X-Auth-Email': `${CF_EMAIL}`,
        'X-Auth-Key': `${CF_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const spotifyAccessToken = 'BQDEWRFozECLT1KlFXnQANCkP2Fw6dwEUJtGP1I6lpZ1QFnZ67tJ57438bPDtE8oAIMF6EfkHYdZP_FVGzllhUPWKxdoNwCXK4bv8UnWyyX2ioxkK7qciTh_5GGX_sU1LgfIfMtrsm9cGeY-p84ddBYdzRU3FGSVgLeC48-zX7AR_KiBCN-AqJ8SWXZygjloBUuC4mAvlPfR6aWYgllNWyQu3fdVybwUTNpUqejbNKNzMLvumR3KTk8F_4_ZC-Y';
    const spotifyUserId = '12186378261';
    console.log( `Bearer ${response.data}`);

    const playlistCreation = await axios.post(
      `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`, {
      headers: {
        'Authorization': `Bearer ${spotifyAccessToken}`,
        'Content-Type': 'application/json'
      },
      data: {
        "name": "New Playlist 23412341234",
        "description": "New playlist description",
        "public": false
      }
    });

    console.log(playlistCreation.data);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);

  }
}

run();