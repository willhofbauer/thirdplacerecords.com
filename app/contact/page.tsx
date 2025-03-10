import Link from "next/link"

export default function Contact() {
  return (
    <main className="container mx-auto px-4">
      {/* Home button */}
      <div className="mb-4 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
        >
          Home
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Contact information */}
        <div className="bg-background border-2 border-primary rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
          <p className="text-center text-lg mb-4">
            <a href="mailto:will@thirdplacerecords.com" className="text-primary hover:underline">
              will@thirdplacerecords.com
            </a>
          </p>
        </div>

        {/* Mailing list signup form */}
        <div className="bg-background border-2 border-primary rounded-lg p-6 shadow-lg">
          <div id="mc_embed_signup">
            <form
              action="https://thirdplacerecords.us9.list-manage.com/subscribe/post?u=7c32e01c4cad5c770613d625f&amp;id=dd0e4533ea&amp;f_id=00e5d1e3f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2 className="text-2xl font-bold mb-4 text-center">Mailing List</h2>
                {/* Email input */}
                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="asterisk text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    id="mce-EMAIL"
                    required
                  />
                </div>
                {/* First name input */}
                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-FNAME" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name{" "}
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    className="text w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    id="mce-FNAME"
                  />
                </div>
                {/* Last name input */}
                <div className="mc-field-group mb-4">
                  <label htmlFor="mce-LNAME" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name{" "}
                  </label>
                  <input
                    type="text"
                    name="LNAME"
                    className="text w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    id="mce-LNAME"
                  />
                </div>
                <div className="indicates-required mb-2 text-sm text-gray-500">
                  <span className="asterisk text-primary">*</span> indicates required
                </div>
                {/* Hidden input for tags */}
                <div hidden>
                  <input type="hidden" name="tags" value="15372770" />
                </div>
                {/* Response messages */}
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                </div>
                {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                  <input type="text" name="b_7c32e01c4cad5c770613d625f_dd0e4533ea" tabIndex={-1} />
                </div>
                {/* Submit button */}
                <div className="clear">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

