import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, BarChart3, Key, CreditCard, User, ChevronDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">OR</span>
          </div>
          <span className="font-semibold">OpenRouter</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground">Models</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Chat</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Rankings</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Docs</a>
          <Button variant="outline" size="sm">Sign In</Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center min-h-[calc(100vh-80px)] mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
        <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
          
          {/* Hero Section */}
          <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
            <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
              <h1 className="my-0 w-full py-0 text-5xl font-semibold">
                <span className="mb-1 hidden md:block">The Unified</span>
                <span className="hidden md:block">Interface For LLMs</span>
                <span className="flex flex-col gap-0.5 text-3xl md:hidden">
                  <div>The Unified</div>
                  <div>Interface For LLMs</div>
                </span>
              </h1>
              <p className="text-muted-foreground text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
                Better <a href="#" className="text-primary hover:underline">prices</a>, better{' '}
                <a href="#" className="text-primary hover:underline">uptime</a>, no subscription.
              </p>
            </div>

            {/* Chat Interface */}
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
              <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
                {/* Routing SVG */}
                <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
                  <svg className="h-80 w-12" viewBox="-5 0 50 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 150C12 150 15 75 25 65" className="text-muted-foreground/60" />
                      <path d="M2 160C12 160 22 160 25 160" className="text-primary" />
                      <path d="M2 170C12 170 15 255 25 255" className="text-muted-foreground/60" />
                    </g>
                    <g>
                      <circle cx="35" cy="60" r="4" fill="currentColor" className="text-muted-foreground/60" />
                      <circle cx="35" cy="160" r="6" fill="currentColor" className="text-primary" />
                      <circle cx="35" cy="260" r="4" fill="currentColor" className="text-muted-foreground/60" />
                    </g>
                  </svg>
                </div>

                <div className="flex w-full items-center justify-between gap-3 flex-row">
                  <Input 
                    className="w-full h-10 flex-1 rounded-lg border-0 px-4 bg-background focus:bg-background/80"
                    placeholder="Start a message..."
                  />
                  <Button className="aspect-square h-10 px-3 group">
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </div>

              {/* Featured Models Section */}
              <div className="w-full min-w-80 space-y-3 md:w-auto">
                {/* Mobile routing curves */}
                <div className="block md:hidden">
                  <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none">
                    <g stroke="currentColor" strokeWidth="1.5">
                      <path d="M155 2C160 15 60 5 60 18" className="text-muted-foreground/60" />
                      <path d="M160 2C160 12 160 15 160 18" className="text-primary" />
                      <path d="M165 2C160 15 260 5 260 18" className="text-muted-foreground/60" />
                    </g>
                    <g>
                      <circle cy="24" cx="60" r="3" fill="currentColor" className="text-muted-foreground/60" />
                      <circle cy="24" cx="160" r="4" fill="currentColor" className="text-primary" />
                      <circle cy="24" cx="260" r="3" fill="currentColor" className="text-muted-foreground/60" />
                    </g>
                  </svg>

                  {/* Provider Icons */}
                  <div className="grid grid-cols-3 gap-4 pb-3">
                    {[
                      { name: 'Google', src: 'https://openrouter.ai/images/icons/GoogleGemini.svg' },
                      { name: 'OpenAI', src: 'https://openrouter.ai/images/icons/OpenAI.svg', invert: true },
                      { name: 'Anthropic', src: 'https://openrouter.ai/images/icons/Anthropic.svg' }
                    ].map((provider, i) => (
                      <Button key={i} variant="ghost" className="h-11 flex items-center justify-center rounded-lg p-4">
                        <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8">
                          <div className={`overflow-hidden rounded-full ${provider.invert ? 'dark:invert' : ''}`}>
                            <img width="256" height="256" alt={`Favicon for ${provider.name}`} src={provider.src} className="h-full w-full object-cover" />
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>

                  {/* Featured Model Card - Mobile */}
                  <Card className="group bg-background rounded-lg border p-4 shadow-sm hover:border-primary border-primary">
                    <CardContent className="p-0 space-y-2">
                      <div>
                        <a className="hover:underline" href="#">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <h3 className="text-foreground font-medium">GPT-4.1</h3>
                            </div>
                            <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex">
                              <div className="overflow-hidden rounded-full dark:invert">
                                <img width="256" height="256" alt="OpenAI" src="https://openrouter.ai/images/icons/OpenAI.svg" className="h-full w-full object-cover" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="flex items-center">
                          <span className="text-muted-foreground text-xs">by <a className="text-primary hover:underline" href="#">openai</a></span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                        <div>
                          <p className="text-green-600 text-sm font-medium">41.4B</p>
                          <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">820ms</p>
                          <p className="text-muted-foreground text-[10px]">Latency</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-red-600">-9.44%</p>
                          <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex items-center justify-between px-2 pt-4">
                    <h2 className="text-muted-foreground text-sm font-medium">Featured Models</h2>
                    <a className="text-primary text-xs hover:underline flex items-center" href="#">
                      View Trending
                      <ExternalLink className="inline-block ml-px size-3" />
                    </a>
                  </div>
                </div>

                {/* Desktop Featured Models */}
                <div className="hidden space-y-3 md:block">
                  <div className="flex items-center justify-between">
                    <h2 className="text-muted-foreground text-sm font-medium">Featured Models</h2>
                    <Button variant="link" className="text-primary gap-0 text-xs hover:underline p-0 h-auto">
                      View Trending
                      <ExternalLink className="inline-block ml-px size-3" />
                    </Button>
                  </div>

                  {/* Model Cards */}
                  {[
                    {
                      name: 'Gemini 2.5 Pro Preview',
                      provider: 'google',
                      icon: 'https://openrouter.ai/images/icons/GoogleGemini.svg',
                      tokens: '204.5B',
                      latency: '2.2s',
                      growth: '+27.2%',
                      growthColor: 'text-green-600'
                    },
                    {
                      name: 'GPT-4.1',
                      provider: 'openai',
                      icon: 'https://openrouter.ai/images/icons/OpenAI.svg',
                      tokens: '41.4B',
                      latency: '820ms',
                      growth: '-9.44%',
                      growthColor: 'text-red-600',
                      featured: true
                    },
                    {
                      name: 'Claude Sonnet 4',
                      provider: 'anthropic',
                      icon: 'https://openrouter.ai/images/icons/Anthropic.svg',
                      tokens: '232.2B',
                      latency: '1.9s',
                      growth: '--',
                      growthColor: 'text-muted-foreground',
                      isNew: true
                    }
                  ].map((model, i) => (
                    <Card key={i} className={`group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${model.featured ? 'border-primary' : 'border-border'}`}>
                      <CardContent className="p-0 space-y-2">
                        <div>
                          <a className="hover:underline" href="#">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-foreground font-medium">{model.name}</h3>
                                {model.isNew && (
                                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">New</Badge>
                                )}
                              </div>
                              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex">
                                <div className={`overflow-hidden rounded-full ${model.provider === 'openai' ? 'dark:invert' : ''}`}>
                                  <img width="256" height="256" alt={model.provider} src={model.icon} className="h-full w-full object-cover" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="flex items-center">
                            <span className="text-muted-foreground text-xs">by <a className="text-primary hover:underline" href="#">{model.provider}</a></span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
                          <div>
                            <p className="text-green-600 text-sm font-medium">{model.tokens}</p>
                            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{model.latency}</p>
                            <p className="text-muted-foreground text-[10px]">Latency</p>
                          </div>
                          <div>
                            <p className={`text-sm font-medium ${model.growthColor}`}>{model.growth}</p>
                            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {[
                { value: '7.9T', label: 'Monthly Tokens', link: true },
                { value: '2M', label: 'Global Users' },
                { value: '50+', label: 'Active Providers', link: true },
                { value: '300+', label: 'Models', link: true, highlight: true }
              ].map((stat, i) => (
                <Card key={i} className={`group rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-lg ${stat.link ? 'cursor-pointer' : ''}`}>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      <p className={`text-3xl md:text-4xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How it Works Section */}
          <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: '1',
                  title: 'Signup',
                  description: 'Create an account to get started. You can set up an org for your team later.',
                  icon: <User className="w-5 h-5 text-primary" />,
                  visual: (
                    <div className="flex flex-row gap-2 max-w-56">
                      {[
                        { icon: '🔍', bg: 'bg-blue-100' },
                        { icon: '📧', bg: 'bg-green-100' },
                        { icon: '🔐', bg: 'bg-purple-100' },
                        { icon: '✉️', bg: 'bg-gray-100' }
                      ].map((item, i) => (
                        <div key={i} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-sm">{item.icon}</span>
                        </div>
                      ))}
                    </div>
                  )
                },
                {
                  step: '2',
                  title: 'Buy credits',
                  description: 'Credits can be used with any model or provider.',
                  icon: <CreditCard className="w-5 h-5 text-primary" />,
                  visual: (
                    <div className="space-y-2">
                      <div className="h-6 bg-primary/5 rounded flex items-center px-2">
                        <span className="text-xs text-muted-foreground">Apr 1</span>
                        <div className="flex-1 flex items-center gap-2 mx-2">
                          <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                          <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                        </div>
                        <span className="text-sm font-medium">$99</span>
                      </div>
                      <div className="h-6 bg-primary/5 rounded flex items-center px-2">
                        <span className="text-xs text-muted-foreground">Mar 30</span>
                        <div className="flex-1 flex items-center gap-2 mx-2">
                          <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                          <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                        </div>
                        <span className="text-sm font-medium">$10</span>
                      </div>
                    </div>
                  )
                },
                {
                  step: '3',
                  title: 'Get your API key',
                  description: 'Create an API key and start making requests. Fully OpenAI compatible.',
                  icon: <Key className="w-5 h-5 text-primary" />,
                  visual: (
                    <div className="flex flex-col gap-3">
                      <div className="h-6 bg-primary/5 rounded flex items-center px-2">
                        <span className="text-xs text-muted-foreground tracking-wide">OPENROUTER_API_KEY</span>
                      </div>
                      <div className="h-6 bg-primary/5 rounded flex items-center px-2">
                        <span className="text-xs tracking-wider">••••••••••••••••</span>
                      </div>
                    </div>
                  )
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
                      {step.step}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
                  </div>
                  <div className="min-h-10 md:min-h-12">
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      {step.icon}
                      <div className="h-4 w-6 flex flex-col justify-center">
                        <div className="h-1 bg-primary/20 rounded"></div>
                        <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                      </div>
                      <div className="h-4 w-12 flex flex-col justify-center">
                        <div className="h-1 bg-primary/20 rounded"></div>
                        <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                      </div>
                    </div>
                    {step.visual}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4 md:space-y-8">
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
              {[
                {
                  title: 'One API for Any Model',
                  description: 'Access all major models through a single, unified interface. OpenAI SDK works out of the box.',
                  link: 'Browse all',
                  visual: (
                    <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out opacity-85">
                          <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                            <div className="overflow-hidden rounded-full">
                              <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                },
                {
                  title: 'Higher Availability',
                  description: 'Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.',
                  link: 'Learn more',
                  visual: (
                    <div className="h-full flex items-center justify-center">
                      <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
                        <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">anthropic/claude-3.7-sonnet</div>
                        <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" className="text-muted-foreground/60">
                          <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
                          <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
                          <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
                        </svg>
                        <div className="flex justify-between w-full">
                          {['Google', 'Anthropic', 'Amazon'].map((provider, i) => (
                            <div key={i} className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                              <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: 'Price and Performance',
                  description: 'Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.',
                  link: 'Learn more',
                  visual: (
                    <div className="relative flex h-full items-center justify-center">
                      <div className="w-full h-32 bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 rounded-lg flex items-end justify-center p-4">
                        <div className="flex items-end gap-2">
                          {[60, 80, 40, 90, 70].map((height, i) => (
                            <div key={i} className={`w-4 bg-primary rounded-t`} style={{ height: `${height}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: 'Custom Data Policies',
                  description: 'Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.',
                  link: 'View docs',
                  visual: (
                    <div className="h-full flex items-center justify-center">
                      <div className="flex flex-col items-center w-full max-w-52">
                        <div className="flex justify-between items-end w-full px-[45px] -mb-2">
                          <div className="w-4 h-4 text-muted-foreground">🔒</div>
                          <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                            <div className="w-5 h-5 text-green-600">✓</div>
                          </div>
                          <div className="w-4 h-4 text-muted-foreground">🔒</div>
                        </div>
                        <div className="w-32 h-32 border border-muted-foreground/20 rounded-full flex items-center justify-center">
                          <div className="text-4xl">🛡️</div>
                        </div>
                      </div>
                    </div>
                  )
                }
              ].map((feature, i) => (
                <Card key={i} className="h-full group rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col justify-between overflow-hidden">
                  <div className="bg-background shadow-none transition-transform group-hover:scale-105 group-hover:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-30"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-30"></div>
                      </div>
                      {feature.visual}
                    </div>
                  </div>
                  <CardContent className="flex flex-col gap-2 px-6 py-4 h-full">
                    <div className="flex flex-col gap-2 h-full">
                      <h3 className="group-hover:text-slate-12 transition-colors duration-200 text-2xl font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <span className="text-primary group-hover:underline flex items-center">
                      {feature.link}
                      <ExternalLink className="ml-1 inline-block w-4" />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Apps Section */}
          <div className="flex flex-col gap-5 max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-5 text-muted-foreground" />
                  <h3 className="text-md font-medium text-muted-foreground">Top Apps</h3>
                </div>
                <p className="text-xs font-medium text-muted-foreground hidden md:block">
                  Largest public apps opting into usage tracking on OpenRouter
                </p>
              </div>
              <div className="group relative">
                <Button variant="outline" className="rounded-full text-sm pl-4 pr-2">
                  Today
                  <ChevronDown className="size-4" />
                </Button>
              </div>
            </div>

            {/* Apps List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
              <div className="flex flex-col space-y-5">
                {[
                  { rank: 1, name: 'Cline', description: 'Autonomous coding agent right in your IDE', tokens: '34.1B' },
                  { rank: 2, name: 'Roo Code', description: 'A whole dev team of AI agents in your editor', tokens: '26.6B' },
                  { rank: 3, name: 'Kilo Code', description: 'AI coding agent for VS Code', tokens: '6.96B' },
                  { rank: 4, name: 'SillyTavern', description: 'LLM frontend for power users', tokens: '5.35B' },
                  { rank: 5, name: 'Chub AI', description: 'GenAI for everyone', tokens: '4.26B' },
                  { rank: 6, name: 'liteLLM', description: 'Open-source library to simplify LLM calls', tokens: '4.09B' },
                  { rank: 7, name: 'HammerAI', description: 'Chat with AI characters for free', tokens: '1.89B' },
                  { rank: 8, name: 'Infinite Worlds', description: 'Build your own adventures, share them with friends', tokens: '1.59B' },
                  { rank: 9, name: 'OpenRouter: Chatroom', description: 'Chat with multiple LLMs at once', tokens: '1.53B' },
                  { rank: 10, name: 't.me', description: 'new', tokens: '1.13B', isNew: true }
                ].map((app, i) => (
                  <div key={i} className="grid grid-cols-12 items-center rounded-lg">
                    <div className="col-span-1 text-left text-muted-foreground">{app.rank}.</div>
                    <div className="col-span-1">
                      <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                        <div className="overflow-hidden rounded size-5">
                          <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 pl-6 text-left">
                      <a className="block truncate font-medium text-muted-foreground hover:text-foreground hover:underline transition-colors group cursor-pointer">
                        {app.name}
                        <ArrowRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                      <div className="truncate text-xs text-muted-foreground">
                        {app.isNew ? <span className="text-primary">new</span> : app.description}
                      </div>
                    </div>
                    <div className="col-span-4 text-right">
                      <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                      <span className="text-xs text-muted-foreground ml-1">tokens</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-5">
                {[
                  { rank: 11, name: 'shapes inc', description: 'General purpose social agents', tokens: '1.09B' },
                  { rank: 12, name: 'Open WebUI', description: 'Extensible, self-hosted AI interface', tokens: '869M' },
                  { rank: 13, name: 'Quack', description: 'Design and interact with characters', tokens: '854M' },
                  { rank: 14, name: 'Caveduck', description: 'AI character chat', tokens: '805M' },
                  { rank: 15, name: 'Fraction AI', description: 'Large perpetual datasets with community ownership', tokens: '715M' },
                  { rank: 16, name: 'Jupi', description: 'Roleplay & fantasy chat', tokens: '705M' },
                  { rank: 17, name: 'novelcrafter', description: 'Your personal novel writing toolbox. Plan, write and tinker with your story.', tokens: '615M' },
                  { rank: 18, name: 'Aider', description: 'AI pair programming in your terminal', tokens: '604M' },
                  { rank: 19, name: 'Khui AI', description: 'new', tokens: '582M', isNew: true },
                  { rank: 20, name: 'Kortix AI', description: 'new', tokens: '571M', isNew: true }
                ].map((app, i) => (
                  <div key={i} className="grid grid-cols-12 items-center rounded-lg">
                    <div className="col-span-1 text-left text-muted-foreground">{app.rank}.</div>
                    <div className="col-span-1">
                      <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                        <div className="overflow-hidden rounded size-5">
                          <div className="h-full w-full bg-gradient-to-br from-green-400 to-blue-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 pl-6 text-left">
                      <a className="block truncate font-medium text-muted-foreground hover:text-foreground hover:underline transition-colors group cursor-pointer">
                        {app.name}
                        <ArrowRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                      <div className="truncate text-xs text-muted-foreground">
                        {app.isNew ? <span className="text-primary">new</span> : app.description}
                      </div>
                    </div>
                    <div className="col-span-4 text-right">
                      <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                      <span className="text-xs text-muted-foreground ml-1">tokens</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#" className="hover:text-foreground">Status</a>
          <a href="#" className="hover:text-foreground">Announcements</a>
          <a href="#" className="hover:text-foreground">Docs</a>
          <a href="#" className="hover:text-foreground">Partners</a>
          <a href="#" className="hover:text-foreground">Careers</a>
          <a href="#" className="hover:text-foreground">Pricing</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
        <p>© 2023 – 2025 OpenRouter, Inc.</p>
      </footer>
    </div>
  );
};

export default Index;