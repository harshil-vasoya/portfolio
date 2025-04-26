import Footer from "./footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Home,
  MapPin,
  Users,
  BriefcaseBusiness,
} from "lucide-react";
import SocialMedia from "./media";
import ZoomableImage from "@/components/shared/image-zoom";
import Photos from "./photos";

export default function MarriageBiodata() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardContent className="p-4 flex flex-col sm:flex-row md:flex-col gap-4 items-center">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="relative w-48 h-48 rounded-full border overflow-hidden">
                  <ZoomableImage
                    src="https://public.rajraiyani.dev/biodata-poster.HEIC"
                    alt="Harshil Vasoya"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl font-semibold">Harshil Vasoya</h2>
                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="text-center w-full sm:text-left md:text-center sm:w-2/3">
                <dl className="grid grid-cols-2 md:grid-cols-1 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Name</dt>
                    <dd className="font-medium">Harshil Vasoya</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Birth Date</dt>
                    <dd className="font-medium">08/10/2002</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Height</dt>
                    <dd className="font-medium">6 feet</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-medium">70 kg</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="p-6 space-y-6">
              {/* <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User2 className="w-5 h-5" />
                  Personal Details
                </h3>
                <Separator className="my-3" />
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Full Name</dt>
                    <dd className="font-medium">Harshil Vasoya</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Birth Date</dt>
                    <dd className="font-medium">08/10/2002</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Height</dt>
                    <dd className="font-medium">6 feet</dd>
                  </div>
                </dl>
              </div> */}

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Education</dt>
                    <dd className="font-medium">B.Tech (Computer)</dd>
                    <p className="text-sm text-muted-foreground">
                      dropout in 3rd year from college
                    </p>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <BriefcaseBusiness className="w-5 h-5" />
                  Work
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Occupation</dt>
                    <dd className="font-medium">
                      Co-founder of{" "}
                      <a
                        className="text-blue-700 cursor-pointer"
                        href="https://topgrowth.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Top Growth IT Solution
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Office address</dt>
                    <dd className="font-medium">
                      303 Silver mount, Pedak road, Rajkot, 360003
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Family Background
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Father's Name</dt>
                    <dd className="font-medium">
                      Prakashbhai Ravjibhai Raiyani
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">
                      Father's Occupation
                    </dt>
                    <dd className="font-medium">Imitation jewellery</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Mother's Name</dt>
                    <dd className="font-medium">
                      Hetalben Prakashbhai Raiyani
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">
                      Mother's Occupation
                    </dt>
                    <dd className="font-medium">Housewife</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Land</dt>
                    <dd className="font-medium">
                      15 vigha{"  "}
                      <span className="text-amber-700">
                        Kasturbadham (Tramba)
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Maternal Details
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Mama's Name</dt>
                    <dd className="font-medium">
                      Nilesbhai Kadvabhai Kakadiya (Bhadla)
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Contact Details
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Contact Number</dt>
                    <dd className="font-medium">+91 9374599564</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Address</dt>
                    <dd className="font-medium">
                      "Bhakti Kunj", Lakheswar socity, 5/6 corner, Pedak road,
                      Rajkot, Gujarat. 360003
                    </dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>
        </div>

        <SocialMedia />
        <Photos />
        <Footer />
      </div>
    </div>
  );
}
