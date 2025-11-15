import PageLayout from '../components/PageLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FaBookOpen, FaPlay, FaMicrophone, FaBook, FaTools } from 'react-icons/fa';

export default function Resources() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-[#e7eff6] to-[#d4e4f7] py-16 shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2a4d69] mb-4 relative">
            Educational Resources
            <span className="block mx-auto mt-3 w-24 h-1.5 bg-[#e74c3c] rounded-full shadow-sm"></span>
          </h2>
          <p className="text-center text-[#666] mb-8 max-w-2xl mx-auto text-lg">Explore our curated collection of educational materials to deepen your understanding of social justice issues and learn how to take action.</p>
          <Tabs defaultValue="articles" className="w-full justify-center">
            <TabsList className="flex justify-center flex-wrap gap-3 mb-8 bg-white rounded-xl p-3 shadow-md border border-[#e7eff6]">
              <TabsTrigger value="articles" className="px-6 py-2 rounded-lg font-medium transition-all bg-[#e74c3c] text-blue-600 hover:bg-[#c0392b]">Articles</TabsTrigger>
              <TabsTrigger value="videos" className="px-6 py-2 rounded-lg font-medium transition-all bg-[#4b86b4] text-blue-600 hover:bg-[#3a6b9c]">Videos</TabsTrigger>
              <TabsTrigger value="podcasts" className="px-6 py-2 rounded-lg font-medium transition-all bg-[#2a4d69] text-blue-600 hover:bg-[#1e3a4d]">Podcasts</TabsTrigger>
              <TabsTrigger value="books" className="px-6 py-2 rounded-lg font-medium transition-all bg-[#28a745] text-blue-600 hover:bg-[#218838]">Books</TabsTrigger>
              <TabsTrigger value="toolkits" className="px-6 py-2 rounded-lg font-medium transition-all bg-[#fd7e14] text-blue-600 hover:bg-[#e8680f]">Toolkits</TabsTrigger>
            </TabsList>
            <TabsContent value="articles">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBookOpen className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Understanding Systemic Racism</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">A comprehensive guide to how systemic racism operates in various institutions and what we can do to dismantle it.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://robertsmith.com/blog/systemic-racism-in-education/" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBookOpen className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">The History of Civil Rights</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Explore the key moments and figures in the American civil rights movement.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://www.civilrightsmuseum.org/" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBookOpen className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Economic Inequality Explained</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Understanding the roots and impacts of economic disparities in society.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://ourworldindata.org/economic-inequality" target="_blank" rel="noopener noreferrer">Read Article</a></Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="videos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaPlay className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Intersectionality 101</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Learn how different forms of discrimination intersect and compound to create unique experiences of oppression.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://youtu.be/w6dnj2IyYjE?si=w-rCONG3vZRSRSqI" target="_blank" rel="noopener noreferrer">Watch Video</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaPlay className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Climate Justice Stories</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Real stories from communities affected by climate change and environmental injustice.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://youtu.be/Y3s58Ang5qI?si=UrYXENLS19S-2DLM" target="_blank" rel="noopener noreferrer">Watch Video</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaPlay className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Gender Equity in Action</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Documentary on the global fight for gender equality and women's rights.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://youtu.be/9isVHRDeGis?si=JfUAOiQjtv8QxQtn" target="_blank" rel="noopener noreferrer">Watch Video</a></Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="podcasts">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#2a4d69] rounded-full flex items-center justify-center mb-4">
                      <FaMicrophone className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Justice Voices Podcast</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Hear from activists and experts on the frontlines of social justice movements.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://open.spotify.com/show/7oxQpThXLAHKvZoFfhUOBz?si=c9ef7d7347254094" target="_blank" rel="noopener noreferrer">Listen Now</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#2a4d69] rounded-full flex items-center justify-center mb-4">
                      <FaMicrophone className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Voices of Change</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Conversations with leaders driving social change in their communities.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://open.spotify.com/show/2Is8N1JBnX0eCB1kUisBkV?si=bfb5126af0984a00" target="_blank" rel="noopener noreferrer">Listen Now</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#2a4d69] rounded-full flex items-center justify-center mb-4">
                      <FaMicrophone className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Justice Talk</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Weekly discussions on current events and social justice topics.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://open.spotify.com/show/66XhGY5JJy6inJT2Refuoa?si=0a0ece3c0fef4a4b" target="_blank" rel="noopener noreferrer">Listen Now</a></Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="books">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBook className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">The New Jim Crow</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">A groundbreaking work on mass incarceration and racial justice in America.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://www.amazon.com/New-Jim-Crow-Incarceration-Colorblindness/dp/1595586431" target="_blank" rel="noopener noreferrer">View Book</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBook className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">How to Be an Antiracist</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">A guide to recognizing and dismantling racism in our daily lives.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://bookshop.org/p/books/how-to-be-an-antiracist-ibram-x-kendi/521ef65d5c2268ca?ean=9780525509288&next=t&next=t" target="_blank" rel="noopener noreferrer">View Book</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBook className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Caste: The Origins of Our Discontents</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">An exploration of the unspoken caste system that has shaped America.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://bookshop.org/p/books/caste-the-origins-of-our-discontents-isabel-wilkerson/ba07006a708c5070?ean=9780593230251&next=t&next=t" target="_blank" rel="noopener noreferrer">View Book</a></Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="toolkits">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaTools className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Community Organizing Guide</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Practical steps for effective community organizing and building grassroots movements for change.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://commonslibrary.org/tools-for-organising/" target="_blank" rel="noopener noreferrer">Download Toolkit</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaTools className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Digital Advocacy Toolkit</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Tools and strategies for effective online activism and social media campaigns.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://mobilisationlab.org/resources/" target="_blank" rel="noopener noreferrer">Download Toolkit</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaTools className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Policy Advocacy Guide</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">How to engage with policymakers and influence legislation for social change.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://www.unicef.org/evaluation/files/Advocacy_Toolkit.pdf" target="_blank" rel="noopener noreferrer">Download Toolkit</a></Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
}
