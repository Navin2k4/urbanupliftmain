import React from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  ThumbsUp,
  MessageSquare,
  IndianRupee,
  Eye,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const issueData = {
  id: "1",
  image:
    "https://th.bing.com/th/id/OIP.PR-xkQ2VtSdJxL1_rXtOrQHaE8?rs=1&pid=ImgDetMain",
  location: "Main Street Bridge",
  severity: "Major",
  description:
    "Large crack in the bridge surface, posing potential danger to vehicles and pedestrians. Immediate attention required to assess structural integrity and implement necessary repairs.",
  reportedBy: "Jane Doe",
  reportedAt: "2023-06-15 09:30 AM",
  status: "Completed",
  upvotes: 88,
  responder: {
    user: "Navin Kumaran",
    avatar: "/placeholder.svg?height=50&width=50",
    type: "NGO - Adheraa",
  },
  completionworkimage: [
    "https://th.bing.com/th/id/OIP.fh9Z8gMqtxh5zy1T-MOc5wHaE7?rs=1&pid=ImgDetMain",
    "https://s.hdnux.com/photos/10/62/72/2305697/7/1200x0.jpg",
    "https://th.bing.com/th/id/OIP.V7k4ylw6YLi--6yW2gW56AHaFj?w=533&h=400&rs=1&pid=ImgDetMain",
  ],
  contributions: [
    {
      user: "John Smith",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "2023-06-16 10:15 AM",
      amount: 100,
    },
    {
      user: "Emily Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "2023-06-17 02:45 PM",
      amount: 600,
    },
    {
      user: "Michael Brown",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "2023-06-18 11:30 AM",
      amount: 100,
    },
  ],
  comments: [
    {
      user: "John Smith",
      avatar: "/placeholder.svg?height=50&width=50",
      content: "I noticed this last week. It's getting worse. Please fix ASAP!",
      timestamp: "2023-06-16 10:15 AM",
    },
    {
      user: "Emily Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      content:
        "I've seen city workers inspecting it yesterday. Hopefully it'll be fixed soon.",
      timestamp: "2023-06-17 02:45 PM",
    },
    {
      user: "Michael Brown",
      avatar: "/placeholder.svg?height=50&width=50",
      content:
        "This is a major safety concern. We need regular updates on the repair progress.",
      timestamp: "2023-06-18 11:30 AM",
    },
  ],
};

export default function IssueDetailPage() {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "bg-red-500";
      case "major":
        return "bg-orange-500";
      case "minor":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500";
      case "in progress":
        return "bg-blue-500";
      case "pending":
        return "bg-gray-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Issues
      </Button>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <div className="flex gap-2">
            <img
              src={issueData.image}
              alt={`Issue at ${issueData.location}`}
              className="w-full h-64 object-cover rounded-md"
            />
            <img
              src={issueData.completionworkimage[0]}
              alt={`Issue at ${issueData.location}`}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
          <Badge
            className={`absolute top-4 right-4 ${getSeverityColor(
              issueData.severity
            )}`}
          >
            {issueData.severity}
          </Badge>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {issueData.location}
            </h1>
            <Badge className={getStatusColor(issueData.status)}>
              {issueData.status}
            </Badge>
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            {issueData.location}
          </div>

          <p className="text-gray-700 mb-6">{issueData.description}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Progress</h2>
            <Progress value={100} className="w-full" />
          </div>

          <div className="flex sm:flex-col flex-row my-6 gap-3">
            <div>
              <h2 className="text-xl font-semibold mb-2">Resolved By : </h2>
              <div className="bg-green-200 flex items-center justify-between rounded-lg p-4">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={issueData.responder.avatar} />
                    <AvatarFallback>
                      {issueData.responder.user[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">
                      {issueData.responder.user}
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      {issueData.responder.type}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <Button className="bg-white text-black hover:text-white transition-colors duration-200">
                      <Eye className="mr-2 h-4 w-4" />
                      View Work Profile
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      className="mr-2 bg-red-500 hover:bg-red-600"
                    >
                      <p className="text-white mr-2">Like Work</p>
                      <Heart className="h-4 w-4 text-white" fill="white" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center bg-yellow-200 max-w-fit px-4 py-2 rounded-xl">
                <h2 className="text-xl font-semibold ">
                  Contributions Rewarded :{" "}
                </h2>
                <IndianRupee className="h-4" />
                <h2 className="text-xl font-semibold ">800</h2>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold font-serif ">
            View Completed Works
          </h2>

          <div className="flex gap-3 my-4">
            {issueData.completionworkimage.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Issue at ${issueData.location}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Reported by {issueData.reportedBy}
                </p>
                <div className="flex items-center text-gray-500 text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  {issueData.reportedAt}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Upvote ({issueData.upvotes})
            </Button>
            <Button variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Comment
            </Button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contributors</h2>
            {issueData.contributions.map((contrbution, index) => (
              <div key={index} className="bg-green-100 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={contrbution.avatar} />
                    <AvatarFallback className="bg-white">
                      {contrbution.user[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {contrbution.user}
                      </p>
                      <p className="text-xs text-gray-500">
                        {contrbution.timestamp}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4" />
                      <p>{contrbution.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            {issueData.comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={comment.avatar} />
                    <AvatarFallback>{comment.user[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{comment.user}</p>
                    <p className="text-xs text-gray-500">{comment.timestamp}</p>
                  </div>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
