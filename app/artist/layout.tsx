
export default function ArtistLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (    
      <div>
        {children}
      </div>
    )
  }