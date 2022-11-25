import React from "react";
import Articles from "./Articles";
class Home extends React.Component {

    render() {

        return (
            <>
                <main className="container mx-auto">
                    <section className="bg-green-600 text-slate-100 text-center py-12">
                        <h1 className="text-4xl">
                            Conduit
                        </h1>
                        <h3>A place to share your knowledge</h3>
                    </section>

                    <h2 className="text-green-600 my-8">Global Feed</h2>
                    <hr className="w-full" />
                    <Articles />
                </main>
            </>
        )
    }

}

export default Home;