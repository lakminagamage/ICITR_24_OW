const faqs = [
    {
        question: "Full paper submission",
        answer:
            (
                <>
                    <p>Authors are invited to submit original full papers of no more than six (6) pages, including results, figures, tables, and references. Authors can include up to two (2) additional pages at a cost to the authors of $250 per page (Rs. 85,000). Electronic submission in PDF format is required. Papers must be formatted in IEEE double-column format on A4 size paper. <br/>Authors must strictly follow the provided template. Final papers found to exceed page limits and or otherwise violate the instructions to authors will not be considered.</p>
                    
                </>
            ),
    },
    {
        question: "Author Responsibilities",
        answer: (
            <>
                <p>
                    As creators of the work, authors have a number of responsibilities
                    when submitting their paper or manuscript to ICITR. They must
                    warrant:
                </p>
                <ul className="list-disc mt-4">
                    <li > &#8226; That the papers they submit are their own original work.</li>
                    <li>
                    &#8226; That no portion of their paper (including, but not limited to,
                        graphics and figures) has been previously published unless written
                        consent from the previous publisher has been obtained prior to
                        submission.
                    </li>
                    <li>
                    &#8226; That the paper is not currently under consideration for
                        publication elsewhere.
                    </li>
                    <li>
                    &#8226; That the authors listed on the paper accurately reflect those who
                        actually did the work and contributed to the paper in a meaningful
                        way.
                    </li>
                    <li>
                    &#8226; That they have identified and acknowledged all sources used in the
                        creation of their paper or manuscript, including any graphics,
                        images, tables, and figures, and also including any persons who do
                        not meet the criteria for authorship.
                    </li>
                </ul>
            </>
        ),
    },
    {
        question: "Blind Review Instructions",
        answer:
            "Author names and their affiliations should be removed from the initial PDF file for the double blind review process. The final accepted camera-ready paper should have the author details as per the IEEE guidelines.",
    },
    {
        question: "Review Process",
        answer:
            "The Papers will go through a thorough review process. Initial submissions with a high similarity index will be rejected without review. For papers that are accepted for review, Program Committee (PC) members will be matched to submissions based on research expertise and interest. Authors will be provided with a brief time window to address the initial review comments. The revised manuscript submitted by the authors will then be taken into account in the final recommendations, and reviews may be changed accordingly. The final decisions will be made by the program chairs.",
    },
    {
        question: "Publication",
        answer:
            "Authors will be required to transfer the copyright to their paper to ICITR. Accepted papers will be available via the online schedule at the conference. The published archival versions of the papers will be made available in the ICITR Digital Library and in Google Scholar after the conference. At least one author of each accepted submission must present the paper at the conference. We encourage all authors to attend if possible.",
    },
    // {
    //     question: "Preparing Camera-Ready Paper",
    //     answer: (
    //         <>
    //             <ul className="list-disc mt-4">
    //                 <li>
    //                     Please edit your paper by incorporating all reviewers' comments
    //                     and use IEEE conference paper format. Please note that ICITR 2024
    //                     organizers reserve the right to reject your paper, if you don't
    //                     modify your paper accordingly.
    //                 </li>
    //                 <li>
    //                     The final camera-ready paper submission must be limited to 6
    //                     pages.
    //                 </li>
    //                 <li>
    //                     It is strictly required to IEEE format and referencing style. The
    //                     latest IEEE template could be found at{" "}
    //                     <a
    //                         href="https://www.ieee.org/conferences/publishing/templates.html"
    //                         className=" underline"
    //                     >
    //                         Click Here
    //                     </a>
    //                     . The papers which do not follow IEEE template will not be
    //                     accepted by IEEE Xplore and cannot be published.
    //                 </li>
    //                 <li>
    //                     Please DO NOT include page numbers in the final manuscript
    //                     submission.
    //                 </li>
    //                 <li>
    //                     The appropriate copyright clearance code notice is to appear on
    //                     <b>
    //                         {` `}the bottom, left-hand side of the first page of the paper,
    //                         as follows:
    //                     </b>
    //                 </li>
    //             </ul>
    //             <ul className="list-inside list-decimal mt-4">
    //                 <li>
    //                     For papers in which all authors are employed by the{" "}
    //                     <b>
    //                         US government, the copyright notice is: U.S. Government work not
    //                         protected by U.S.
    //                     </b>{" "}
    //                     copyright
    //                 </li>
    //                 <li>
    //                     For papers in which all authors are employed by a Crown government
    //                     (UK, Canada, and Australia), the copyright notice is:{" "}
    //                     <b>to be announced later.</b>
    //                 </li>
    //                 <li>
    //                     For papers in which all authors are employed by the European
    //                     Union, the copyright notice is: <b>to be announced later.</b>
    //                 </li>
    //                 <li>
    //                     For all other papers the copyright notice is:{" "}
    //                     <b>to be announced later.</b>
    //                 </li>
    //             </ul>
    //         </>
    //     ),
    // },
    // {
    //     question: "Preparing the paper IEEE PDF compliant using IEEE PDF eXpress",
    //     answer: (
    //         <ul className="list-disc">
    //             <li>
    //                 Before submit the paper, authors are instructed to prepare the paper
    //                 IEEE PDF compliant.
    //             </li>
    //             <ul className="list-inside list-decimal">
    //                 <li>
    //                     Add the copyright notice to the bottom of the bottom, left-hand
    //                     side of the first page of the paper
    //                 </li>
    //                 <li>
    //                     Proofread your source document thoroughly to confirm that it will
    //                     require no revision
    //                 </li>
    //             </ul>
    //             <li>
    //                 Follow the following instructions to prepare IEEE compliant PDF
    //                 version of your accepted paper, this is compulsory for all accepted
    //                 papers.
    //             </li>
    //             <ul className="list-inside list-disc">
    //                 <li>
    //                     Log in to the IEEE PDF eXpress site using:
    //                     https://ieee-pdf-express.org/
    //                 </li>
    //                 <li>First time users should create your PDF eXpress account.</li>
    //                 <ul className="list-inside list-decimal ml-8">
    //                     <li>Select the Create Account</li>
    //                     <li>Enter the following:</li>
    //                     <ul className="list-inside list-disc ml-8">
    //                         <li>
    //                             <b>ID_NUM*</b> for the Conference ID (ID_NUM* is the
    //                             conference ID.)
    //                         </li>
    //                         <li>your email address</li>
    //                         <li>a password</li>
    //                     </ul>
    //                     <li>
    //                         Continue to enter information as prompted. An Online
    //                         confirmation will be displayed, and an email confirmation will
    //                         be sent verifying your account setup.
    //                     </li>
    //                 </ul>
    //                 <li>
    //                     Previous users of PDF eXpress need to follow the above steps but
    //                     should enter the same password that was used for previous
    //                     conferences. Verify that your contact information is valid.
    //                 </li>
    //                 <ul className="list-inside list-disc ml-8">
    //                     <li>
    //                         <b>ID_NUM*</b> for the Conference ID (ID_NUM* is the conference
    //                         ID.)
    //                     </li>
    //                     <li>your email address</li>
    //                     <li>a password</li>
    //                 </ul>
    //             </ul>
    //         </ul>
    //     ),
    // },
    // {
    //     question: "IEEE Copyright Form",
    //     answer: (
    //         <ul className="list-disc mt-4">
    //             <li>
    //                 Authors of accepted paper(s) must submit completed copyright form(s)
    //                 along with the final manuscript submission. Papers submitted without
    //                 copyright form will not be published.
    //             </li>
    //             <li>
    //                 Use "Copyright form" in the Camera Ready paper submission page
    //                 available on Microsoft CMT.
    //             </li>
    //             <li>
    //                 Fill your copyright form as follows:
    //                 <ul className="list-inside list-decimal ml-8">
    //                     <li>
    //                         Write your paper title at TITLE OF PAPER/ARTICLE/REPORT,
    //                         INCLUDING ALL CONTENT IN ANY FORM, FORMAT, OR MEDIA
    //                         (hereinafter, “the Work”)
    //                     </li>
    //                     <li>Write list of authors at COMPLETE LIST OF AUTHORS:</li>
    //                     <li>
    //                         Write the conference title at IEEE PUBLICATION TITLE (Journal,
    //                         Magazine, Conference, Book): 2024 9th International Conference
    //                         on Information Technology Research (ICITR) (ID_NUM*)
    //                     </li>
    //                 </ul>
    //             </li>
    //         </ul>
    //     ),
    // },
    // {
    //     question: "Camera Ready Paper Submission",
    //     answer: (
    //         <p>
    //             Send your IEEE PDF compliant camera-ready paper should be submitted to
    //             Microsoft CMT along with scanned copy of the duly completed
    //             copyrightform.{" "}
    //             <b>
    //                 Deadline for the camera-ready paper submission will be announced in
    //                 advance.
    //             </b>
    //         </p>
    //     ),
    // },
    // {
    //     question: "Presentation",
    //     answer: (
    //         <>
    //             <ul className=" list-disc mt-4">
    //                 <li>
    //                     Each paper is assigned a total of 15 minutes, and the breakdown is
    //                     as follows:
    //                     <ul className="list-inside list-decimal ml-4">
    //                         <li>Presentation: 10 Minutes</li>
    //                         <li>Q&A: 5 Minutes</li>
    //                     </ul>
    //                 </li>
    //                 <li>
    //                     Please keep these time limits in mind when preparing your
    //                     presentation.
    //                 </li>
    //                 <li>
    //                     The time limit will be strictly enforced due to the substantial
    //                     number of papers scheduled in each session.
    //                 </li>
    //                 <li>
    //                     Presenting authors are asked to arrive at their session 10 minutes
    //                     before the scheduled start of the respective session, allowing the
    //                     Session Chair to verify the attendance of the presenting authors.
    //                 </li>
    //                 <li>
    //                     We recommend that one author conduct the entire presentation,
    //                     adhering to the abovementioned time limits.
    //                 </li>
    //                 <li>
    //                     Each room will comprise a multimedia projector and a computer with
    //                     Microsoft PowerPoint, and PDF reader installed.
    //                 </li>
    //                 <li>
    //                     Presenting authors may use the computer provided in the venue.
    //                 </li>
    //                 <li>
    //                     Please make sure to preview your presentation with the multimedia
    //                     setup in the room before the scheduled start of the respective
    //                     session.
    //                 </li>
    //                 <li>
    //                     If you need any assistance, please contact the conference
    //                     organizing staff.
    //                 </li>
    //             </ul>
    //             <p className=" font-semibold mt-4">
    //                 Please note that the papers that are not presented will not be sent
    //                 to IEEE Xplore for publication.
    //             </p>
    //         </>
    //     ),
    // },
    
    {
        question: "Payment Details",
        answer:
            (
                <>
                    <div className="bg-white shadow-md rounded mt-6 overflow-x-auto">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Local Delegates</th>
                                    <th className="py-3 px-6 text-left">IEEE Member</th>
                                    <th className="py-3 px-6 text-left">Non-IEEE Member</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Non Student Author</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">25,000 LKR</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">30,000 LKR</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Student Author</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">20,000 LKR</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">25,000 LKR</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Additional Paper Registration (For Non Student)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">20,000 LKR</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">25,000 LKR</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Additional Paper Registration (For Student)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">15,000 LKR</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">20,000 LKR</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Participant Fee (Without Paper)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">10,000 LKR</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">12,000 LKR</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Participant Fee for Student (Without Paper)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">5,000 LKR</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">5,000 LKR</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white shadow-md rounded mt-6 overflow-x-auto">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Foreign Delegates</th>
                                    <th className="py-3 px-6 text-left">IEEE Member</th>
                                    <th className="py-3 px-6 text-left">Non-IEEE Member</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Non Student Author</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">350 USD</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">400 USD</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Student Author</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">250 USD</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">300 USD</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Additional Paper Registration (For Non Student)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">300 USD</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">350 USD</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Additional Paper Registration (For Student)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">200 USD</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">250 USD</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Participant Fee (Without Paper)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">300 USD</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">350 USD</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">Participant Fee for Student (Without Paper)</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">100 USD</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">100 USD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            ),
    },
    {
        question: "More Information",
        answer: (
            <p>
                Further information regarding paper submission and conference
                registration can be obtained by contacting the conference organizing
                committee via{" "}
                <a href="mailto:icitr@uom.lk" className="underline">
                    icitr@uom.lk
                </a>
                .
            </p>
        ),
    },
];

export default faqs;