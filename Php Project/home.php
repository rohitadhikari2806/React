<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
    </head>

    <body>
        <header>
        <nav
            class="navbar navbar-expand-sm navbar-dark bg-dark"
        >
            <div class="container">
            <img
                src="https://static.vecteezy.com/system/resources/previews/027/543/231/non_2x/hotel-logo-silhouette-hotel-icon-vector.jpg"
                class="img-fluid rounded-circle"
                alt=""
                height="75px"
                width="75px"
               />
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="home.php" aria-current="page"
                                >Home
                                <span class="visually-hidden">(current)</span></a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="aboutus.php">About Us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Dropdown</a
                            >
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <a class="dropdown-item" href="empinsert.php"
                                    >Employee Detail insert</a
                                >
                                <a class="dropdown-item" href="empupdate.php"
                                    >Employee Details update</a
                                >
                                <a class="dropdown-item" href="empdelete.php"
                                    >Employee Details delete</a
                                >
                                <a class="dropdown-item" href="empshow.php"
                                    >Employees Details</a
                                >
                            </div>
                        </li>
                    </ul>
                    <form class="d-flex my-2 my-lg-0" action="register.php">
                        
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
    </header>
    <main>
            <div
                class="container my-3"
            >
              <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li
                        data-bs-target="#carouselId"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="First slide"
                    ></li>
                    <li
                        data-bs-target="#carouselId"
                        data-bs-slide-to="1"
                        aria-label="Second slide"
                    ></li>
                    <li
                        data-bs-target="#carouselId"
                        data-bs-slide-to="2"
                        aria-label="Third slide"
                    ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img
                            src="data:image/jpeg;base64,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"
                            class="w-100 d-block"
                            alt="First slide"
                            height="400px"
                            width="900px"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="data:image/jpeg;base64,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"
                            class="w-100 d-block"
                            alt="Second slide"
                            height="400px"
                            width="900px"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFRUVFRYVFRUQFhUVFRYVFRUXFhUWFRUYHSggGBonHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGy0dHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLSstLSstLS0rLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABOEAACAQIDAwkCBwwIBQUAAAABAgADEQQSIQUxQQYTIlFhcYGRoQcyFCNCUnKSsTNDYnOCk6Kys8HR0hUlNFNjwsPxFkSD4fAkVGR0o//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACwRAAICAQQBAgQGAwAAAAAAAAABAhESAxMhMUEEUSJhcdEygZGxwfAjUqH/2gAMAwEAAhEDEQA/AOVmIMUYgwAQYmGYUACMKAwQAEVTqZSGGuUhrdxv+6JhQA2GKTeB2iOYnZqvc3HS6Xg2o9DGaL5qaMd5RCe/KL+t4nGM/RKmwKLp9G6f5JhI6Ipvoh18GKJutmm0wTc/RyhQpFr3FwL8BMYKFRzbUx+jWr09FqMvCwNpnKmWotE2hmp1GD2FiRpL7ZOzhiTdj0ezjMTiA2pLEnjcza8iMYObUcbzl9Rp8ZI203XDOkbHwi0UCILAScash0G6Ii0bWdGlp1FWYzlbHXJhCkTvMXTkhRN1BGTmyPzVoi5G6SyIBSjxFkRDVeIYMeMmmnCyQxDIgmmYnmzJ+SHzUMEGZAFMwZJYChFDDx4BmVvMxS4eWPweGKENtCzZA+DiEcPLIUYoUZWCFmyq5iKWnLTmRCNAQwQZsgCiDCOEk3mYYpmPBCyZA+CCK5rqk4JFc3HggyZWcxD+DiWJoQczDAMjyo0Q0U0QYEiTChmFABJgghQAEEBiYAafYzXoLr7pZT35i1vJh5x/FVgqKW+cyjuAVvtZpD5LtdKi/NYN9dbf6f2Rzb1G9E/g1EbwIdT6ssykr4NoSqmFQ2yiG4seGsYxO2kZix4ygdIwwkrSiU9WRdVtqKdJouQ9e9VRfTfMEs1HJatkqo3hG4IW432d6oN0fCOI2khbMrZqYPWI+TpLSM2ydh20ktTeVmHeTqVSVQiUoijGleLLXhQgjCyGP06ceIAjoLIqUY8tKPKRAWjoQkU4eSDPEmpABWWFlic8BaAB2gtEc5EmpGA7BGechs8KAcMTGS8MNAB4GKBjKtFBowHs0QWjZaJvEB5SMQYpoiSARhQ4mABQocKABGFBCgBc8lqtqjr1pfxVgB6O0t9pC9OqP8Mn6hFQ+iGZzYb2rp25ge26G3raakJc5T8q6H8sFP8ANIl2aR6MS7SO5jjRp40JgUyywe0RTFra7xKsRTwEdb5BcsFqLzT6EcDNwMWOuecsFVZWDKbEbiJpqXKuuAATqPWF0OrO34etJTVrTmHJfljmcJU0PbN62IDLcGUmSy9oVryZhjczN7OxWtpeYCprHQFhUqWhK94ziE1i6MYiQIQiS/CEWjAU7RMAgJiAPdG2aJepCTrgAsxoteJd7mwjqLaMBQFhGme8RUq3ibwAcUxQMbvaJLwAdDxQa8YBjqtAB6FeIzRJeAHlZ4mG0SZABQjDhGABQjDMSYAFCMOJMAHMLUyujHcrqx7lYE/ZNnUup7R9omHImzWrmVW+cqt9YA29ZEi4GT2vTy1qijcKj27sxt6WkKWvKGn8cT85EPkgU+qmVLCUSxMU8THEF4hisPvkwLIaoQZuvZZsKhjsZzGIDFOZqPZGKnMpQDUcOkYmikzLU7ggjQjjNRs/lfVprlYXnXh7JNmfNrfnW/hFD2TbM+ZV/PNElJBkjluwuWLc909FJ4zquAxoOVwdDEj2TbL/ALur+ef+MvMFySw1Jcqipb8J2PrLjfkh0SOdUreMJUkpNh0gLDP9dopNkUhuzeLGXYiOKgg5wTN+0jHHBUqT0hq7spuSdAt+JnP25e1v9pL1IrspQbOwtiRGWr3nHX5e1+EZ/wCPcQP94t2I9tna1PXEvVvoJx+n7Rq3ylv3GCp7R6/yUA7zDdiGDOwq4XUxmpib8ZxpuX2IO8esSeXlfq9YbsQwZ2XnR1xJxKjjOMnlxiDw9YxW5YYk9Q8zDdiGDOz1NoKN5Ei1NtUx8oTitXb+Ibe/lIr4yo29285O8h7bO2VeVNFflDzEgYnl5QXiPtnIQb7yT3wSXrvwilpI6TifaOvyQfKJT2irbUN9Wc3LxPOmTvSK24lUxiYbQpuc4IRhxMACMIwzCMACiTFGJgAJqNlPehTPYV+qxUegEy00XJ2peky9Tk+BVbeob1ky6Kh2K2ps81MjDgCh7wxf/UkD+hDxmio6g9hH6QP8kVkM55TadGyimZw7EECbNUTRNRjL4WTuPyPBFN8GE3fsVpAbS/6FUeqTLthZsvZBRttEH/Bqj9WaQlbJlHg7jKOttTnVDUqOKdCDlqUebRWBIOZecqKSNNGtYg6b5M5R/wBkxNt/wet+zaS0qKlMMxCqFXU6ACwnSjHpWUZxNWxHwXHa8c+FBGgG/n+z1gGIqggjB4y+ny8JbTLwNf8AA/SMk/027m2HoNUG7O3QXwv/ANofw3GDVsMpHUji/wBp+ya7UvNL819zPej4V/kyK1WsST8ExmpJtz2EsCSraA1TxUd1u3W1wG0VqlkKvTqJYvTqgBgGvlYFSVZTlaxBIupG8RvA7Zp1GyMGp1PmVBY+B4/bCqf21O3DVPSrSt+sfORKLi6aouMlJcGI9t/9nw/45v1JxepOze3I/wDp8N+Nb9ScZczk1PxG+n0NQGCJMzLFQoLRBvGAsQRsXigkADJhAw7QrQAUDFAxF4amAD6tFZoyWEIvEOxwmIMbarGzXjpisiNChtCnWcoRhQzCgAUIwGFAAjCgMKABGXHJl9ai9aq31SR/nEppY7Ae1YD5ysPIZ/8AJE+hx7NZstxnIIBGW+vWCAP1jLJynzfIyooGzg9/6pt62klqs8z1Tkpppndo000yXelxzD1jq4aiRpWt2Mp/dKtniLzKOo/Jbii5Gx83uVKR72t9s0vs42VVpY5WZRl5uoLqyke72GYIMZsPZfVPw+mCTYrU/UM6NHUuSMtSHws63txb4auOujVH/wCbSJicErpTq1WJp06QY0wNCQL5j16aW7O+WG1VvQqjrpVB+gYrZx+Kp/i0/VE9OMnF2jhlFSVMp8+IqrmzLhqPybgZiOG+1h5eMap0rm1LHktwDkMCe4n+MtMXshKlTPVZmUAZaZ0VTxOm+V2CGExJZFohbC4IAUkXtcFe8aGdMZqrXXyS4/Xs53F3T/d/x0G6tVb4PiqdnsTTq0xobakg8O70GkkU6ZXFUVLFiMLWBY7zarh9T5yfgMMaaZM7PYmxfeBwHhIWIb/11EdeFxPpVwv8ZjOd8Lr+/obacK5fZiPbp/Z8N+Ob9mZxUmds9uNNmw2Hyi9qzbvxZnEayON6MPAzi1PxHTDoGaDPI5qnqmi5Lcj8ZjjeigWmDY1apyoOsDQlj2Ad9osGVkim5yJLTsWzfYxSABxGKqMeIoKtMd13zE+kvqHsp2WPepVG7WrVR+oRHtsW4jz8WiS89GN7NdkjdhQe+pW/nkWt7M9lH/lyPo1q373j2xbh565yEah6jO5Yv2WYA+49an3MrD9JSfWZvaPs1ZL81XR/waimmfMXBPlDGgys5U+MtpaBcWSRpNTtDkw1JrVkK33HQqfosNDCp7MQcIsorwFSKbmGI0v4xS4FjNDTwyjhHlpjqkOa8FYmb/o0xX9FzUCkIDQi3B4mAaFFNFYfDvU0po7/AItWf9UGdhzDJhS+w3JDGP8Aegg66rKPQXb0lrhuQLffawHWKSk+TNb7IrQ6ZioRM6ThuRmFS2YPUPXUY/YthLCjs6lT+500T6KgHxIiyKwOX0NmV392k57SpA82sJYUuTFc+8UTvOY+Q09Zv6gkZxFkPBGUpcl0HvuzfRAUfvMk0dl0qZuq6jiSSfMy7dZErJJtlUiIGAZSeDA+RvAxsbHhp5QNQZtFBJ6lFzE482qMDobgkHgWAYj1nN6mNpM10nTYoPFAyKrx5GnC0dCY+s13syH9YUvo1P2bTJ05rfZvptCj/wBT9i8vRf8Akj9Rai+BnZMcPiqn0G/VMg08eKWGw7sCQww9MkW6PO5UDHsuw85YYodB/ot9hlbhsIK+ASmTbPh6YDb8rGmpVgOw2PhPaPOQihyiRmChGzHEthwDbXKjOao/Ayo3lCXHUaWEbGpTGU0ueIpEG4tmsrDQ+GkgbNwlJKtKvzrOtPDZW+KYDOpcGux+SSBVW0jvsqguFOFLutX4GaPOMtRbIFZc/MlwD7hOnVvsbyh1EuaG2WOXPSCZqiU1+OpvcuGPyL6jKNON+yN4t/6www68LjPSrg/4xhcLh6jUkoBKZSpTxB5umq5wgIscpG/P72o32vY2PaLf1jhP/q479pgZIGe9rrfEUPxp/UM5zRm99sVW1Cgf8b/Tacxo7RAnlesjJz4Oz07SjyWlSip3qD3gTq/I3FImGo07Bfi1I4DUa+t5xiptYTouzKmbB0GB300+0ReiU03YeocWlRrtqcq8NQJDvdh8lAzHxygykf2hoTZKFRhwNgNe5mGknYKmtRQKiq4/DAPrJC8nMMdQmU/gsR6TucZvycycF4KOty/Yf8sfrC//AJ4yE/tIHyqDjuImkxHIrDv8qoO4r/CRG9nGHO+rV/Q/liwn/s/+fYeUfb9yhPtCw7aHOn0h/CNnlAtTWm6t2X18po6fsxwIvmNV7i2rKB+issdm8hdnUCGTDIWG5qmaoe8ZybR4T9xZR9jO7LwZxIKshNIizk+74fhDgRrOaqms9GGmLZbWHUNJi63s3wu5Hqp1WcNb64N4pab8DU15OXKsMpNDyq5IYjBqaqtztIb2C9JPpqDu7R6TKjG93qP3Gc8vhdM1XKtEtIu8iril/wBiP3kRznx2+RP2RWgpmpw3JbB0rZaFMka3qA1Dfru97SxyACw0HUNw8I/UMYd52mKG3kd4MRi0X3mA7zr5SoxXKGgu5sx/B1/2iGWDSPUlHX5RM3uU/FjIyHFVjZcxvwpreS5JDot69VRvMrq+06Y3G/dr9kcbkvUUXxLpRH/yKgU+CXufAQUMPgxohrYlurDUiqeLvYgdtosvZDohrtC5HRbLfUi1wONuuTq20cImgVqhHzr2v3aD0h1tpClup4XD2/vmOJrDtCroPFZRY/aNElqritiCSMzhUoUr2CjRQTuCjQDcI4tktIsavKRzpTRUHYJHNEVLs1yx3tx6u6QamPupULSpqwH3Jc9Sxsfujk2Pcw7oMNiKtMdNc6/Opi7AcMy8fyZnrXJF6dJh18G66jpDs3+UjrWlzh8SrjMrBh1iIxOCR9SLHrG/x65y/Jm9exAp4q01/syxd9pYcdZq/sKsxeIwDrqBmHWv7xNH7LG/rPDd9X9hVlacFkn8yJSdNHogi4sZT4RK9KmKBo86iLzautRVLUwMq51a1mtYG1xx03C4EOemcRSCkw3YEAa6CpTCkHSxUGxGp4cSeJhhKg3YRt1iefGo1PS16XvNqd15dQEx2OykUVFOZcHrr9/Xe2rHX5R4tvPEyPSwtZ8SMTXVKYp03pUaaMXNqrU2qVKj2Av8UgCi9gGJJvZb2rUAF5nds7TKg2iAxvtqqg4ejr9//wBN5yjB4KrVNqSM1t5HujvY6CdTwWxDtSqWrsfg9F/dU2NR7ai/AAEXI6++azHbJp06XN0kVFUWCqAB6TCUMnZpGVKjiNPk433yoB2IL/pH+E6TsCwwVJBchOiCd/RbjbulDtXD5WMt+RmKFnonf76/Yw+zzhFUxtmw2TuEvKMpMBpLqgZqjNktY4sbWOLGSKIhQyYUYEbH1XWmzIAzhSVVjYFrdEE8Be2s4Lynw+0BWbEYpKgYm+dblFHAIykhAOAv6zuu0qthbrlPVqHcJjq6ea7NNOWJTezDbr4yhVw+IPOFABmbUtTcEWY8Towv3TkGOphKjoNQrso7QrEfund8NhaeESpVCpTeqLDIoF2sbMVFr2vecT27sWth2u/SVictVdVc7/Buw+s5taLxV80babVuitzQZo2YV5z0a2a7Fcr3b7nSt2vK9sVjKxsGbXhTH7hNFTqYWmL0MDUq2++41xSp9+Ubx4xnE8qKoFhiKVAfM2fSBP51tx/Knfyzn4K+lyLxLLnqgU0358S4Rf0jFpszA0zZ8SazfMwVM1Ce5zZfIyqx+1FFVQ9Go7OOhVxzs19eIFgBqNSSInGbVKoA2JCK2nN4Nebt2F7LY+cMRZGgbEU6Q+LwdOmOFTaNXX80tjfzldjeVJJFNsXUObQU8DTFBCd2UVLAt3WMy+EqMNCoqOTozZma3URezntIh7a5/RqigBbWpkLTIvpdKYtY9tvGUooTkWj4gAnLSoUid74pjWcHrK8D+TKr+malVfjalRrG2SmwRLaalQLDjpbxiaZoAAu1RrgErTCrYkXsWYndu3cJC5xXqrzaZXB6KgFmc8ARqH3bgPCNIVjnNljnpUwuW4OUMym4Or3NtOB0tCosXJ5xiCpA41L3v7pvYgW11G/jJOJo1j0azlOyo5uOOiC5B8BGMEApYOC6/IIIQnrzCx07rQfQIfqVqSEWViNOnV3X+ih6PiTLqiLqCToRpchVYdgFg3rKXDYjMwplcuY5QFHv30sG3m/VeXWHpogsMo7EsfDTQeJEw1TaBHxODX3qV0fgyjKp6g6n3vq+MVSx7JpWWw/vEuU/K4p46dsmLc/JA+lqfIbvMx4YQuNxYcb6J+UBYHxmSd8M0quUS8HTDWIIIOoI1Bmk5O4ClTxFPEhBzlMkgqct8ylDmtodGOs5/XdMP0sPVs99aaDNRa51zDcvepmn5N8q6TWWsOZbQXb7mSdwFTcD2G3jNoQrkylKzsf9O0VTO7FAN9wxt29EHTtkUcssB/7hfqv/ACymoVNP4RFXB02NyuvZp9k6UzCi+/4vwP8Afr9Wp/LENytwf98PqVP5Zn2wFP5vqYj4InVKEW2K5VYUjSpfup1T9izGcpuU1EqQrMT206o9SsvPg6fNEiY7Z1N1IKiAD3sw2lTfC5UYFkdw/XdmzAnwYeXZNfiVzCcSZqmz8RztHQEdJeDAHj6zpnJvlRSxSAqbN8pDvBkJroqn2VHKHZ282mUos9KoHXepv39YM6rjcOHFpmMZyeN7iTKI0y22XjFqKHXjvHUeIMvcNVmKwlGphrtlJW/SCi5A+cBxt9k02BxSsAykEHcRKTEy+pvHg0rqVWSVqSiSTeEWjDVgJXtj3u2VdAbAt6m3jCwHsRg2diSQBw7pFq4qlS93pt6eJkXF1Xb3m8Bu8pW1ZLY0iPtbFtUOZj3dQHUBIWFw4qA0aq5qdXQj7GHURvBj7Uyx7P8AzdLfCYNaKNicQciILkt1Dq7eAEjsvo4ttXAmjWqUW1NN2S/XY6HxFj4yCVljtvaHP16ta1ucdmA6gT0R4C0ryZ5z74Oon7YNGopB56q3B6pChT1hOkf0hGlqYlaNqIAyi5q5QrsBr0q2h7N8ibPx1VAKdMBmuSGyBqluABIJsLcOuFyhqYw5atck7lCVCocjsT3h5WnpnIIwlanUXPVqFDexFmdzoOlwBGvXfQ6RG08Xhx0Kas2Ye9W017FU2B7yY8aeDSmrvVeo5AJpqvNhSRqpc5r9WgEhY7EpUXm0oooJHu3Zz+WxJ8rQESMCMUEC0ucWmPlDoLqb61DYHxMh46k6nNzquxOqhi3iWtbyJk+vgsY9NRUZ6aKoyfCGyAKBYAK2pFuoSDgBSKk1s9w1gtOwBHzsxuR3WgMkYjF4dBenSYni1YhrfkrYW77xK0KtbK4W4GisAqUxuvlOig7orF7SpqLUqK01tYufjH77tu/JtBg9muaalRakblWchUPAkEnXdwvuiAaxuAy3+NU1B8mmc47nbd5XkjD11UD4tS2UXL3YZrakDQWvuBBjWKwKAXWpepwNMEKD2s2rDstFDHBSqlQhygF7XzNxOZr5e4WiY0G1ZsyGqt1zAI25VJ3ALuXvHVNBVehS0q1luNMlD4w6cM2ijzMrqCFjf3j1m7H+MZ2ns9U+MGUMNebbXP2ZRqD6TJ1J8miuKJbbdUtalRbKN7G1R++1so8ryyo83VBu/PDdlU5yOy5Nh4SJhWuFKUjcqLhzkRTxFhq1uvS8ew2yum9RnINRQrLS+LUqCCAbanUCS6+hSv6kHGYNKDhgq1QT9wYnnBfitt9vwhNRSWs4NOjRVUNxmxIGUjspDUjsMGAwaJ7ihe4anvO8y7wplxdktB8mtkNhgV553UjSmbZFPEoN69wNuyaJKsraTR8PNkZNE0tG2MZFSDnI7FQssIRMYqNI71yI8hYmZ5dIMobtt6E/umIpbRai2dGs32zbcrqgZBpoGzE8BoRr5zmeOYkzNwuVlqVRo6xyU9oweyVbE7rPoT9Ftxm/wm06FQbyn0t3mNJ5eHVNHyd5VYjD2DMzp2m7AeO/uuO+aGZ6OpYcHVSrdxjZ2St7hMpO8ppfvA0MwmwOWFKrYBkzdROR/JrX8CZsMPtM8c699/8AaAE5cIRxPiIsUT1+kTS2n+GPG0kLju1fL/vGAgU++BqelgI8Md2rB8PPA+QgBBbZ7t8nziF2DxdgI3tnlNSoDpsS3BFtnP5PDvNpjOUHLLEMnxQ5q/E9J7d50El0M1O3du4LZ63bp1LdFBq7fwHbORcqeV2IxrfGELTBulJPcHafnN2nwtKzHI7kuzFmOpZiST3kyuJnLqyk+PBvCKXI4Wic0QWhZphRpZM2jygxDU8tOmtNF94YdMlx1sV/fI+D2etRBVevTRGJ94k1NND0AL+doIJ6Hg5RzGpgqZyqXxBI43pJ4AdI/WkDZuNrUkNOiW6Rv0R0r2tYEagdkEEYD2PwWKZTVqkrYX+PaxbsCHpE+ETguYyK1QuXN70lsoWxsLsbkg9wggiCxyrjtCtOmlMEEHKMzkHfd2ufK0iClUsopgsBf4sC+83OXthwSSids/CCsnOZ1RVbKc7WYMBe2QamS3w9HKVCtVJG9+gl/o7z5wQSZ/COPINnUKiUhSNQ5QSejoTmtoW320k3D4VV3DXr4+cEEwlJs1SSJ1NZKpiCCSWTKEn0GggmsDOROp1I6KkEE2RmxYqwjUgglCG2qSPUeCCJjIOJF7zLbU5MU6hJp/FseG9T4cPCFBM7aKqzMbQ2HWo++unzl1Xz4eMbw9O0OCaxdoyapljRoKd4t3S62bWr0rcziHQdQZlH1QbekEEGIvsNym2gv3xX+ktI+uUGT6fK3HfMpfm1/mggisQ9/wAT487ubXuSn++8j19oYup90xDW4hWyjyWwgggBEUIm7U9ZkPEsXMOCICMcFfhKXa2By6wQSZK0XB8lTeFeCCc9G5//2Q=="
                            class="w-100 d-block"
                            alt="Third slide"
                            height="400px"
                            width="900px"
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
              </div>
              
            </div>

            <div
                class="container my-3"
            >
               <h2 class="text-center">Services</h2>
               <div
                class="row justify-content-center align-items-center g-2"
               >
                <div class="col">
                    <div class="card">
                        <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-fWNvCe6zCWt4zXlZoyPyx6FmLKlzgwCDw&s" alt="Title" />
                        <div class="card-body">
                            <h4 class="card-title">Superior</h4>
                            <p class="card-text">We have world class interior</p>
                        </div>
                    </div>
                    
                </div>
                <div class="col">
                    <div class="card">
                        <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0207/7830/files/JBR.jpg?3648398128962306023" alt="Title" />
                        <div class="card-body">
                            <h4 class="card-title">Chef</h4>
                            <p class="card-text">We have world class chef</p>
                        </div>
                    </div>
                    
                </div>
                <div class="col">
                    <div class="card">
                        <img class="card-img-top" src="https://www.dhaneshtmasala.com/site_img/ready_mix_masala/02.jpg" alt="Title" />
                        <div class="card-body">
                            <h4 class="card-title">Spices</h4>
                            <p class="card-text">We have world class spices</p>
                        </div>
                    </div>
                    
                </div>
                

                
               </div>
               
            </div>
            
            
        </main>
        <footer class="text-center bg-dark text-light p-3 ">
            <blockquote>&copy; All Rights Reserved</blockquote>
          </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
