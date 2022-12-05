import React, { Suspense } from 'react';

async function getArtist() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!res.ok) throw new Error('Failed to fetch.');
  return await res.json();
}

async function getAlbums() {
  return new Promise((resolve) =>
  setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums', {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error('Failed to fetch.');
      const data = await res.json();
      resolve(data);
    }, 3000)
  );
}

export default async function Page() {
  const artistData = getArtist();
  const albumData = getAlbums();

  const artist = await artistData;

  return (
    <div>
      <h1>{JSON.stringify(artist)}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Album promise={albumData} />
      </Suspense>
    </div>
  );
}

const Album: Function = async ({ promise }): Promise<JSX.Element[]> => {
  const albums = await promise;

  return albums.map((album) => <li key={album.id}>{album.title}</li>);
};
