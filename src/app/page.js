import DemoSection from "../components/DemoSection";
import PageHeader from "../components/PageHeader";
import UploadForm from "../components/UploadForm";
import UploadIcon from "../components/UploadIcon";


export default function Home() {
  
  return (
   <>
       <PageHeader h1T={'Adding captions to your videos is now easy peasy.'} h2T={'Our platform allows you to add captions to videos in just a few clicks.'} />
     
      <div className="text-center mt-8">
        <UploadForm />
      </div>
      <DemoSection />
      
      </>
    
  )
}